import profileReducer, {addPostActionCreator, deletePost} from "./profile-reduser";

const state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11},
  ],
}

it('check length of posts', () => {
  const action = addPostActionCreator('add new post by test')

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5)
})

it('check new post text', () => {
  const action = addPostActionCreator('add new post by test')

  let newState = profileReducer(state, action)
  expect(newState.posts[4].message).toBe('add new post by test')
})

it('check length of posts after delete', () => {
  const action = deletePost(1)

  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
})