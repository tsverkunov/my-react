import React from "react";
import style from "./Users.module.sass";
import usersIcon from "../../common/img/users_icon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                                }} className={style.unSub}>UNSUBSCRIBE</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
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