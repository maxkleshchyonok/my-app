import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControls'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likecounter={p.likecounter} />)

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.content + ' ' + s.font}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder={'Post message'}
                    validate={[required, maxLength10 ]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm ({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;