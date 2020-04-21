import React from "react";
import s from './../Dialogs.module.sass';



const Chat = (props) => {
    return (
        <div className={s.chat}>
            {props.message}
        </div>
    )
}

export default Chat;