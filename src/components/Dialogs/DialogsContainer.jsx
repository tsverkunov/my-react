import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator} from "../../redux/messageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
   return {
      dialogs: state.messageReducer.dialogs,
      chats: state.messageReducer.chats,
      avatar: state.authReducer.avatar,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newMessageBody) => {
         dispatch(addMessageCreator(newMessageBody));
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