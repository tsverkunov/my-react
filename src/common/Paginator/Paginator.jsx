import style from "./Paginator.module.sass";
import React from "react";

let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {

   let pagesCount = Math.ceil(totalUserCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div className={style.page}>
         {pages.map((p, index) => {
            return <span key={index}
                         className={currentPage === p && style.changePage}
                         onClick={(e) => {
                            onPageChanged(p)
                         }}>{p}</span>
         })}
      </div>
   )
}

export default Paginator;
