import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateDataProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {Redirect} from "react-router-dom";


class ProfileContainer extends React.Component {
   profileRefresh() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getProfile(userId);
      this.props.getStatus(userId)
   }

   componentDidMount() {
      this.profileRefresh()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.profileRefresh()
      }
   };

   render() {
      if (!this.props.isAuth) return <Redirect to='/login'/>
      return (
         <Profile {...this.props}
                  savePhoto={this.props.savePhoto}
                  isOwner={!this.props.match.params.userId}
                  // authorizedUserId={this.props.authorizedUserId}
                  // getProfile={this.props.getProfile}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  updateDataProfile={this.props.updateDataProfile}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return ({
      profile: state.profileReducer.profile,
      status: state.profileReducer.status,
      authorizedUserId: state.authReducer.id,
      isAuth: state.authReducer.isAuth,
   })
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {setProfile}) (WithUrlDataContainerComponent);

export default compose(
   connect(mapStateToProps,
      {getProfile, getStatus,
      updateStatus, updateDataProfile,
         savePhoto}
         ),
   withRouter,
)(ProfileContainer);