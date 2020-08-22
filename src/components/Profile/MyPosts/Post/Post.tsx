import React, {FC} from 'react';
import style from './Post.module.sass';
import LikeIcon from '../../../../common/img/like_icon.svg'

type PropsType = {
 id: number
 message: string
 likesCount: number
 addLike: (id: number) => void
}
const Post: FC<PropsType> = (props) => {
    let addLike = () => {
        props.addLike(props.id);
    }

    return (
        <div>
            <div className={style.post}>
                <div className={style.circle}>
                </div>
                {props.message}
            </div>
            <div className={style.like}>
                <img alt="" onClick={addLike} src={LikeIcon}/>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post