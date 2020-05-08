import React from "react";
import style from './Users.module.sass';
import * as axios from 'axios';
import usersIcon from '../../common/img/users_icon.png'

const Users = (props) => {
let usersGet = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
}


    return (
        <div className={style.wrapper}>
            <button onClick={usersGet} className={style.buttonGet}>User Get</button>
            <div className={style.wrapperContent}>{
                props.users.map(u => <div key={u.id} className={style.user}>
                    <div className={style.photo}>
                        <img src={u.photos.small != null ? u.photos.small : usersIcon} alt="img"/>
                    </div>
                    <div>
                        {u.subscribed
                            ? <button onClick={() => {
                                props.onUnSubscribe(u.id)
                            }}
                                      className={style.unSub}>UNSUBSCRIBE</button>
                            : <button onClick={() => {
                                props.onSubscribe(u.id)
                            }}
                                      className={style.sub}>SUBSCRIBE</button>}
                    </div>
                    <div className={style.name}>{u.name}</div>
                    <div>From: {"u.location.country"}, {"u.location.cityName"}</div>
                    <div>Status: {u.status}</div>
                </div>)}
            </div>
        </div>

    )
}


export default Users;