import React from "react";
import style from './Chat.module.sass';
import userIcon from "../../../common/img/users_icon.png";


const Chat = (props) => {
   return (
      <div>
         <div className={style.chatBlock}>
            <div className={style.ava}>
               <img alt=""
                    src={props.avatar || userIcon}
                    // src='https://i.redd.it/ahg5rdrp9vxz.jpg'
               />
            </div>
            <div className={style.chatItem}>
               {props.message}
            </div>
         </div>
      </div>
   )
}


export default Chat;