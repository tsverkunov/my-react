import React, {FC} from "react";
import style from './Chat.module.sass';
import userIcon from "../../../common/img/users_icon.png";
import {ChatsType} from "../../../types/types";

type OwnProps = {
   avatar: string | null
}
type PropsType = OwnProps & ChatsType

const Chat: FC<PropsType> = (props) => {
   return (
      <div>
         <div className={style.chatBlock}>
            <div className={style.ava}>
               <img alt=""
                    src={props.avatar || userIcon}
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