import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPosts = (props) => {
  let postsElements = props.posts.map(
    post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
  )

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostFormRedux
          onSubmit={addNewPost}
        />
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Enter your post message"
        validate={[required, maxLength50]}
      />
      <button>
        add Post
      </button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({
  form: 'addPostForm'
})(AddPostForm)

export default MyPosts