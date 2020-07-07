import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
   getProfile,
   getStatus,
   requestFollowed,
   savePhoto,
   updateDataProfile,
   updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {getFollowingInProgress} from "../../redux/usersSelectors";
import {follow, unfollow} from "../../redux/usersReducer";


class ProfileContainer extends React.PureComponent {
   profileRefresh() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getProfile(userId);
      this.props.getStatus(userId);
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
      return (
         <Profile {...this.props}
                  savePhoto={this.props.savePhoto}
                  isOwner={!this.props.match.params.userId}
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
      friends: state.sideBarReducer.friends,
      followingInProgress: getFollowingInProgress(state),
      followed: state.profileReducer.followed
   })
}

export default compose(
   connect(mapStateToProps,
      {
         getProfile, getStatus,
         updateStatus, updateDataProfile,
         savePhoto, follow, unfollow,
         requestFollowed
      }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);