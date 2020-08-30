import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <div className={s.content}>
        <textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder="Enter your text" />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>

    </div>
  )
}

export default MyPosts;