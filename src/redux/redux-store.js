import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reduser"
import dialogsReducer from "./dialogs-reduser"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store