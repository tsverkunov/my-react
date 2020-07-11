import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";


const HeaderContainer = (props) => {

   return <Header {...props}/>
}

let mapStateToProps = (state) => ({
   isAuth: state.authReducer.isAuth,
   login: state.authReducer.login,
   id: state.authReducer.id,
   avatar: state.authReducer.avatar,
})

export default connect(mapStateToProps, {logout})(HeaderContainer);