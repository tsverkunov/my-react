import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setCurrentUserAva, setUserData} from "../../redux/authReducer";
import {authDataAPI} from "../../api/api";


class HeaderContainer extends React.Component{

    componentDidMount() {
            authDataAPI.setData().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);

                        authDataAPI.setAva(this.props.id).then(data => {
                            this.props.setCurrentUserAva(data.photos);
                        })
                }
            });
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

export default connect(mapStateToProps,{ setUserData, setCurrentUserAva })(HeaderContainer);