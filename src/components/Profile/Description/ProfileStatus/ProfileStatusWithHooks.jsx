import React, {useEffect, useState} from "react";
import style from "./ProfileStatus.module.sass"


const ProfileStatusWithHooks = ({isOwner, status, updateStatus}) => {

   let [editMode, setEditMode] = useState(false);
   let [localStatus, setLocalStatus] = useState(status);

   useEffect(() => {
      setLocalStatus(status)
   }, [status])

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);
      updateStatus(localStatus);
   }
   const onStatusChange = (e) => {
      setLocalStatus(e.currentTarget.value);
   }

   return (
      <div>
         {!editMode
            ? <div className={style.spanItem}>
               <p onDoubleClick={isOwner && activateEditMode}>
                  ({status || 'status'})
               </p>
            </div>
            : <div className={style.inputItem}>
               <input onBlur={deactivateEditMode}
                      onChange={onStatusChange}
                      autoFocus={true}
                      value={localStatus}
                      type="text"
               />
            </div>
         }
      </div>
   );
}


export default ProfileStatusWithHooks;
