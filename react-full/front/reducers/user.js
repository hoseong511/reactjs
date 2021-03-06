import produce from 'immer';

export const initialState = {
  loadingMyInfo: false,
  loadedMyInfo: false,
  loadingUser: false,
  loadedUser: false,
  loadingMyinfo: false,
  loadedMyinfo: false,
  isSigningUp: false, // 회원가입 중
  isSignedUp: false,
  isSigningOut: false, // 회원 탈퇴중
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도 중
  isLoadingFollowers: false,
  isLoadedFollowers: false,
  isLoadingFollowings: false,
  isLoadedFollowers: false,
  isRemovingFollower: false,
  isRemovedFollower: false,
  isFollowing: false, // 팔로우 시도중
  isFollowed: false,
  isUnfollowing: false, // 언팔 시도중
  isNickChanging: false, // 닉네임 변경 시도 중
  isNickChanged: false,
  me: null,
  actionError: null,
  visible: false,
  userInfo: null,
};

export const LOAD_USER_INFO_REQUEST = 'LOAD_USER_INFO_REQUEST';
export const LOAD_USER_INFO_SUCCESS = 'LOAD_USER_INFO_SUCCESS';
export const LOAD_USER_INFO_FAILURE = 'LOAD_USER_INFO_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const VISIBLE_ON = 'VISIBLE_ON';
export const VISIBLE_OFF = 'VISIBLE_OFF';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const signUpRequestAction = (data) => ({ type: SIGN_UP_REQUEST, data });
export const signOutRequestAction = (data) => ({ type: SIGN_OUT_REQUEST, data });
export const loginRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = (data) => ({ type: LOG_OUT_REQUEST, data });
export const visibleOn = (data) => ({ type: VISIBLE_ON, data });
export const visibleOff = (data) => ({ type: VISIBLE_OFF, data });
export const followRequestAction = (data) => ({ type: FOLLOW_REQUEST, data });
export const unFollowRequestAction = (data) => ({ type: UNFOLLOW_REQUEST, data });
export const loadMyInfoRequest = (data) => ({ type: LOAD_MY_INFO_REQUEST, data });

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadingMyinfo = true;
        draft.loadedMyinfo = false;
        draft.actionError = null;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadingMyinfo = false;
        draft.loadedMyinfo = true;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadingMyinfo = false;
        draft.loadedMyinfo = false;
        draft.actionError = action.error;
        break;

      case LOAD_USER_INFO_REQUEST:
        draft.loadingUser = true;
        draft.loadedUser = false;
        draft.actionError = null;
        break;
      case LOAD_USER_INFO_SUCCESS:
        draft.loadingUser = false;
        draft.loadedUser = true;
        draft.userInfo = action.data;
        break;
      case LOAD_USER_INFO_FAILURE:
        draft.loadingUser = false;
        draft.loadedUser = false;
        draft.actionError = action.error;
        break;



      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        draft.isSignedUp = false;
        draft.actionError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.me = null;
        break;
      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.actionError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.isLoggedIn = false;
        draft.actionError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedin = false;
        draft.actionError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedin = false;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false;
        draft.isLoggedin = false;
        draft.actionError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.isNickChanging = true;
        draft.isNickChanged = false;
        draft.actionError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.isNickChanging = false;
        draft.isNickChanged = true;
        draft.me.nickname = action.data.nickname;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.isNickChanging = false;
        draft.isNickChanged = false;
        draft.actionError = action.error;
        break;
        
      case LOAD_FOLLOWERS_REQUEST:
        draft.isLoadingFollowers = true;
        draft.isLoadedFollowers = false;
        draft.actionError = null;
        break;
      case LOAD_FOLLOWERS_SUCCESS:
        draft.isLoadingFollowers = false;
        draft.isLoadedFollowers = true;
        draft.me.Followers = action.data;
        break;
      case LOAD_FOLLOWERS_FAILURE:
        draft.isLoadingFollowers = false;
        draft.isLoadedFollowers = false;
        draft.actionError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.isLoadingFollowers = true;
        draft.isLoadedFollowers = false;
        draft.actionError = null;
        break;
      case LOAD_FOLLOWINGS_SUCCESS:
        draft.isLoadingFollowers = false;
        draft.isLoadedFollowers = true;
        draft.me.Followings = action.data;
        break;
      case LOAD_FOLLOWINGS_FAILURE:
        draft.isLoadingFollowers = false;
        draft.isLoadedFollowers = false;
        draft.actionError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.isFollowing = true;
        draft.isFollowed = false;
        draft.actionError = null;
        break;
      case FOLLOW_SUCCESS:
        draft.isFollowing = false;
        draft.isFollowed = true;
        draft.me.Followings.push({ id: action.data.UserId })
        break;
      case FOLLOW_FAILURE:
        draft.isFollowing = false;
        draft.isFollowed = false;
        draft.actionError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.isRemovingFollower = true;
        draft.isRemovedFollower = false;
        draft.actionError = null;
        break;
      case REMOVE_FOLLOWER_SUCCESS:
        draft.isRemovingFollower = false;
        draft.isRemovedFollower  = false;
        draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId);
        break;
      case REMOVE_FOLLOWER_FAILURE:
        draft.isRemovingFollower = false;
        draft.isRemovedFollower = true;
        draft.actionError = action.error;
        break;
        
      case UNFOLLOW_REQUEST:
        draft.isUnFollowing = true;
        draft.isFollowed = true;
        draft.actionError = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.isUnFollowing = false;
        draft.isFollowed = false;
        draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId);
        break;
      case UNFOLLOW_FAILURE:
        draft.isUnFollowing = false;
        draft.isFollowed = true;
        draft.actionError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data.PostId );
        break;
      case VISIBLE_ON:
        draft.visible = true;
        break;
      case VISIBLE_OFF:
        draft.visible = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
