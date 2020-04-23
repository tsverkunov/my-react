import React from "react";
import style from './Chat.module.sass';


const Chat = (props) => {
    return (
        <div>
            <div className={style.chatBlock}>
                <div className={style.ava}>
                    <img src='https://novsvin.ru/wp-content/uploads/2018/09/1280-515523102-young-pig-on-grass.jpg'></img>
                </div>
                <div className={style.chatItem}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}


export default Chat;