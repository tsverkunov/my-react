import React from "react";
import style from './Clip.module.sass';
import clip from "./Rock Balance - 42470.mp4"

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