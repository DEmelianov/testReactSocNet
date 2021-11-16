import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map(
    post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
  )

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
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

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newPostText"
        placeholder="Enter your post message"
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