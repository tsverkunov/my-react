import React from 'react';
import s from './Post.module.sass';

const Post = (props) => {
  return (
    <div>
      <div className={s.post}>
        <div className={s.circle}>

        </div>
        {props.name}: {props.message}
      </div>
      <div className={s.like}>
          Like: {props.likesCount}
        </div>      
    </div>

  )
}

export default Post;