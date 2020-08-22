import React, {FC} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";


type StatePropsType = {
   isAuth: boolean
   login: string | null
   id: number | null
   avatar: string | null
}
type StateDispatchType = {
   logout: () => void
}
type OwnPropsType = {}
type PropsType = StatePropsType & StateDispatchType & OwnPropsType

const HeaderContainer: FC<PropsType> = (props) => {

   return <Header {...props}/>
}

let mapStateToProps = (state: AppStateType): StatePropsType => ({
   isAuth: state.authReducer.isAuth,
   login: state.authReducer.login,
   id: state.authReducer.userId,
   avatar: state.authReducer.avatar,
})

export default connect<StatePropsType, StateDispatchType, OwnPropsType, AppStateType>(
  mapStateToProps, {logout})(HeaderContainer);