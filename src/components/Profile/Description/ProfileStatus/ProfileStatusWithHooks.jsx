import React, {useEffect, useState} from "react";
import style from "./ProfileStatus.module.sass"


const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         {!editMode
            ? <div className={style.spanItem}>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '---'}
                    </span>
            </div>
            : <div className={style.inputItem}>
               <input onBlur={deactivateEditMode}
                      onChange={onStatusChange}
                      autoFocus={true}
                      value={status}
                      type="text"
               />
            </div>
         }
      </div>
   );
}


export default ProfileStatusWithHooks;
