import React from "react";
import style from "./Users.module.sass";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import Preloader from "../../common/Preloader/Preloader";


let Users = ({
                totalUserCount,
                pageSize,
                currentPage,
                onPageChanged,
                followingInProgress,
                users,
                follow,
                unfollow,
                isFetching,
                isOwner
             }) => {
   return (
      <div className={style.wrapper}>
         <Paginator totalItemsCount={totalUserCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
         />
         {isFetching
            ? <Preloader/>
            : <div className={style.wrapperContent}>
               {users.map(u =>
                  <User followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                        isOwner={isOwner}
                        user={u}
                        key={u.id}
                  />
               )}
            </div>}
      </div>
   )
}

export default Users;