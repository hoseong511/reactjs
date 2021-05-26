const express = require('express');
const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
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
          attributes: ['id', 'nickname']
        }]
      }]
      // offset: 10 이거는 게시물이 추가 삭제되었을 시 누락되는 게시물이 발생
    })
    res.status(200).json(posts)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;