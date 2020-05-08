import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.messageReducer.dialogs,
        chats: state.messageReducer.chats,
        addNewMessage: state.messageReducer.addNewMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageCreator());
        },
        onChangeMessage: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;