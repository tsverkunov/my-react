import React from "react";
import style from "./MyPosts.module.sass";
import Post from "./Post/Post";
import AddNewPost from "./AddNewPost/AddNewPost";


const MyPosts = React.memo(props => {
   let postElement =
      [...props.post]
         .reverse()
         .map(p => <Post addLike={props.addLike}
                         message={p.message}
                         likesCount={p.likesCount}
                         id={p.id}
                         key={p.id}/>);
   return (
      <div className={style.posts}>
         <div>
            <h3>My posts</h3>
         </div>
         <AddNewPost addPost={props.addPost}/>
         {postElement}
      </div>
   )
});

export default MyPosts;

// PureComponent
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//    return nextProps != this.props || nextState != this.state;
// }