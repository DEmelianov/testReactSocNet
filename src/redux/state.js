let store = {
  _state: {
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
  },
  _callSubscriber () {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

window.store = store

export default store
