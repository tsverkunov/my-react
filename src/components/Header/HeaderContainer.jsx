import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";


function HeaderContainer(props) {
    return <Header {...props}/>
}

let mapStateToProps = (state) => ({
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        id: state.authReducer.id,
        currentAva: state.authReducer.currentAva
})

export default connect(mapStateToProps,{logout})(HeaderContainer);