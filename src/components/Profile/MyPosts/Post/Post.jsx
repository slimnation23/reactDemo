import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    
        <div className={s.post}>
          <img src="https://static.toiimg.com/photo/72975551.cms" alt="user"/>
          <p>{props.message} </p>
          <button>likes {props.like}</button>
        </div>
     
  )
}

export default Post;