import React from "react";
import style from './Clip.module.sass';
import clip from "./video_2.mp4"

const Clip = (props) => {
   return (
      <div className={style.clip}>
         <video autoPlay muted loop width="420" height="240" controls>
            <source src={clip} type="video/mp4"/>
         </video>
      </div>
   )
}

export default Clip;