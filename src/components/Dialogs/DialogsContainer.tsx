import {Dialogs} from "./Dialogs";
import {actions} from "../../redux/messageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {compose} from "redux";
import {ChatsType, DialogsType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {ComponentType} from "react";


type StatePropsType = {
   dialogs: Array<DialogsType>
   chats: Array<ChatsType>
   avatar: string | null
}
type StateDispatchType = {
   addMessage:(newMessageBody: string) => void
}
type OwnPropsType = {}
// type PropsType = StatePropsType & StateDispatchType & OwnPropsType
const mapStateToProps = (state: AppStateType): StatePropsType => {
   return {
      dialogs: state.messageReducer.dialogs,
      chats: state.messageReducer.chats,
      avatar: state.authReducer.avatar,
   }
}
// const mapDispatchToProps = (dispatch) => {
//    return {
//       addMessage: (newMessageBody) => {
//          dispatch(addMessageCreator(newMessageBody));
//       }
//    }
// }
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose<ComponentType>(
   connect<StatePropsType, StateDispatchType, OwnPropsType, AppStateType>(
     mapStateToProps, {addMessage: actions.addMessage}),
   withAuthRedirect
)(Dialogs);