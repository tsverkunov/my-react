import React from "react";
import s from './Dialogs.module.sass';
// import Victoria from "./Victoria/Victoria";
import {NavLink, Route} from "react-router-dom";
// import Chat from "./Chat/Chat";
// import Ivan from "./Ivan/Ivan";
// import ChatVictoria from "./ChatVictoria/ChatVictoria";
// import ChatIvan from "./ChatIvan/ChatIvan";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Chat = (props) => {
    return (
        <div className={s.chat}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.wrapperContent}>
            <div className={s.dialogs}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Victoria' id='2'/>
                <DialogItem name='Valeria' id='3'/>
                <DialogItem name='Donald' id='4'/>
                <DialogItem name='Kate' id='5'/>
                <DialogItem name='Bill' id='6'/>
            </div>
            <div className={s.chats}>
                <Chat message='In half a year I will be a programmer!'/>
                <Chat message='I learn Javascript!'/>
                <Chat message='I will live in my house!'/>
                <Chat message='I will live in my house!'/>
                <Chat message='I will live in my house!'/>
            </div>
        </div>
    );
}

export default Dialogs;