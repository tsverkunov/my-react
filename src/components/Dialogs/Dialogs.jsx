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

    let dialogsData = [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Victoria' },
        { id: 3, name: 'Valeria' },
        { id: 4, name: 'Donald' },
        { id: 5, name: 'Kate' },
        { id: 6, name: 'Bill' }
    ]
    let chatsData = [
        { id: 1, name: 'In half a year I will be a programmer!' },
        { id: 2, name: 'I learn Javascript!' },
        { id: 3, name: 'I will live in my house' },
        { id: 4, name: 'I will live in my house' },
        { id: 5, name: 'I will live in my house' }
    ]

    return (
        <div className={s.wrapperContent}>
            <div className={s.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.chats}>
                <Chat message={chatsData[0].message}/>
                <Chat message={chatsData[1].message}/>
                <Chat message={chatsData[2].message}/>
                <Chat message={chatsData[3].message}/>
                <Chat message={chatsData[4].message}/>
            </div>
        </div>
    );
}

export default Dialogs;