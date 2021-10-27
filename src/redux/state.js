let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11},
    ],
    newPostText: 'The new post text'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Alex2'},
      {id: 3, name: 'Alex3'},
      {id: 4, name: 'Alex4'},
      {id: 5, name: 'Alex5'},
    ],
    messages: [
      {id: 1, message: 'Mess1'},
      {id: 2, message: 'Mess2'},
      {id: 3, message: 'Mess3'},
      {id: 4, message: 'Mess4'},
    ]
  },
  sidebar: {}
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state
