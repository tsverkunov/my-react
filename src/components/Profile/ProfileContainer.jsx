import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7873;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                }
            }
        )
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {profile: state.profileReducer.profile}
};


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);