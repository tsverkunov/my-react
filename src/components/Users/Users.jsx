import React from "react";
import style from "./Users.module.sass";
import usersIcon from "../../common/img/users_icon.png";
import {NavLink} from "react-router-dom";
import {followedAPI} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.page}>
                {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p && style.changePage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>

            <div className={style.wrapperContent}>
                {props.users.map(u => <div key={u.id} className={style.user}>
                    <div className={style.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersIcon} alt="img"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                followedAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }} className={style.unSub}>UNSUBSCRIBE</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                followedAPI.follow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }} className={style.sub}>SUBSCRIBE</button>
                        }
                    </div>
                    <div className={style.name}>{u.name}</div>
                    <div><span>From:</span> {"u.location.country"}, {"u.location.cityName"}</div>
                    <div><span>Status:</span> {u.status}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Users;