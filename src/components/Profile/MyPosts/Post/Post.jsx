import React from 'react';
import s from './Post.module.sass';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <div className={s.circle}></div>
                {props.message}
            </div>
            <div className={s.like}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKOVqElc_z-T2uuxtcdGTzRx9fHGDGzvyUy_RkAOqTIPNqwB7n&usqp=CAU"></img>
                {props.likesCount}
            </div>
        </div>

    )
}

export default Post;