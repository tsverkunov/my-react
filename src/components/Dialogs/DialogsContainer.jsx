import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);