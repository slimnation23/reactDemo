import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = 
      props.posts.map ( p => <Post message={p.message} like={p.likesCount} /> );

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props. updateNewPostText(text);
  }

  return (
      <div className={s.posts}>
        <div> 
          <img className={s.img} src="https://images.pexels.com/photos/3672776/pexels-photo-3672776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
          <h3>My posts</h3>
          <div className={ s.content }>
            <textarea onChange={ onPostChange }
                      ref={ newPostElement }
                      value={ props.newPostText } 
                      placeholder="Enter your text"/>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>
        
        <div>
          { postsElements }
        </div>
        
      </div>
  )
}

export default MyPosts;