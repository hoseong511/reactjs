const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');

const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
  try {
    console.log(req.headers);
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);    
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => { // GET /user/1
  console.log(req.headers)
  try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.userId },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      if (fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length // 개인정보 침해 예방
        data.Followers = data.Followers.length
        data.Followings = data.Followings.length
        res.status(200).json(data);
      } else {
        res.status(404).json('존재하지 않는 사용자입니다.');
      }
  } catch (error) {
    console.error(error);    
    next(error);
  }
});

router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts?lastId=1
  try {
    const where = { UserId: req.params.userId }
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
    }
    const posts = await Post.findAll({
      where, 
      limit: 10,
      order: [
              ['createdAt', "DESC"],
              [Comment, 'createdAt', 'DESC']
            ],
      include: [{
        model: User,
        attributes: ['id', 'nickname']
        }, {
          model: Image,
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }],
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id']
        }, {
          model: Post,
          as: 'Retweet',
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image
          }, {
            model: User,
            as: 'Likers',
            attributes: ['id'],
          }]
         }],
      })
      // offset: 10 이거는 게시물이 추가 삭제되었을 시 누락되는 게시물이 발생
    res.status(200).json(posts)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', isNotLoggedIn, async (req, res) => { // POST /user/
  try {
    console.log(req.body);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 이메일입니다.')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', '*'); 알려준 header방식으로 안되는디요
    res.status(201).send('ok!');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});


router.post('/login', isNotLoggedIn, (req, res, next) => { // POST user/login
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason); // 401 허가 된지 않음
    }
    return req.login(user, async (loginErr) => { // passport 에서 자체적으로 로그인 한다.
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
        }, {
          model: User,
          as: 'Followings',
        }, {
          model: User,
          as: 'Followers',
        }]
      })
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res, next) => { // POST /user/logout
  req.logout();
  req.session.destroy();
  res.send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => { // PATCH user/nickname
  try {
    const result = await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    console.log(result);
    
    res.status(200).json({ nickname: req.body.nickname, id: req.user.id })
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
  try {
    console.log(req.params.userId);
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) })
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) })
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers)
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings)
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /followings
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({UserId: parseInt(req.params.userId, 10)})
  } catch (error) {
    console.error(error);
    next(error)
  }
});


module.exports = router;