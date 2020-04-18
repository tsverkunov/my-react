import React from 'react';
import s from './Post.module.sass';

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.circle}></div>
      Post 1
    </div>
  )
}

export default Post;