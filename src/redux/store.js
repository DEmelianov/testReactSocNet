import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";

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
      ],
      newMessageBody: '',
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

window.store = store

export default store
