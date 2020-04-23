import React from 'react';
import s from './Post.module.sass';
import LikeIcon from './../../../../img/like_icon.svg'

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <div className={s.circle}></div>
                {props.message}
            </div>
            <div className={s.like}>
                <img src={LikeIcon}></img>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;