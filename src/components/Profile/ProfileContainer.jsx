import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7873;
        }
        this.props.getProfile(userId);
            // profileAPI.setProfile(userId).then(data => {
            //     this.props.setUserProfile(data);
            // });
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profileReducer.profile
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {setProfile}) (WithUrlDataContainerComponent);


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter
)(ProfileContainer);