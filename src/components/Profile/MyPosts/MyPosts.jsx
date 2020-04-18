import React from 'react';
import './MyPosts.sass';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div className="posts">
        <div>
          <h2>My posts</h2>
        </div>
				<div className="newPost">
          <textarea className="news">
           your news...
          </textarea>
					<div className="buttonSend">
						<a href="#">Send</a>
					</div>
				</div>
        <Post message='Hi,how are you?' />
        <Post message="It's my first post!'" />        
      </div>
  )
}

export default MyPosts;