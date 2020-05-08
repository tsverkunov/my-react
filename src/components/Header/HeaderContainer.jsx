import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setCurrentUserAva, setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true,
            headers: {
                "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);

                    let userId = this.props.id;
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                            }
                        })
                        .then(response => {
                            this.props.setCurrentUserAva(response.data.photos);
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