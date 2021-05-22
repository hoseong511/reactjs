import React from 'react';
import Head from 'next/head';
// import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';
import Mylayout from '../components/MyLayout';
import { useSelector } from 'react-redux';

const Profile = () => {
  const me = useSelector(state => state.user.me)
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <Mylayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings}/>
        <FollowList header="팔로워 목록" data={me.Followers}/>
      </Mylayout>
    </>
  )
};

export default Profile;