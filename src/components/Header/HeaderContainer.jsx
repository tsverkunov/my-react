import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthUserData();
        // authDataAPI.setData().then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login} = data.data;
        //         this.props.setUserData(id, email, login);
        //
        //             authDataAPI.setAva(this.props.id).then(data => {
        //                 this.props.setCurrentUserAva(data.photos);
        //             })
        //     }
        // });
    }
    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return{
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        id: state.authReducer.id,
        currentAva: state.authReducer.currentAva
    }
}

export default connect(mapStateToProps,{getAuthUserData, logout})(HeaderContainer);