import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.meme-arsenal.com/memes/dff65f3ee0eccc3ea86a62e02a5649c8.jpg' />
            <div className={s.postText}>
                {props.message}
            </div>
            <div>
                <span>likes: </span>
                {props.likecounter}
            </div>
        </div>
    );
}

export default Post;