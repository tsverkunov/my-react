import React from "react";
import style from "./Users.module.sass";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";


let Users = ({
                totalUserCount,
                pageSize,
                currentPage,
                onPageChanged,
                followingInProgress,
                users,
                follow,
                unfollow
             }) => {
   return (
      <div className={style.wrapper}>
         <Paginator totalUserCount={totalUserCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
         />
         <div className={style.wrapperContent}>
            {users.map(u => <User followingInProgress={followingInProgress}
                                  follow={follow}
                                  unfollow={unfollow}
                                  user={u}
                                  key={u.id}
               />
            )}
         </div>
      </div>
   )
}

export default Users;