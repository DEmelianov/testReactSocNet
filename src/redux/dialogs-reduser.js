const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages]
  }

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body

      return stateCopy
    }
    case SEND_MESSAGE: {
      let body = stateCopy.newMessageBody

      stateCopy.newMessageBody = ''
      stateCopy.messages.push({id: 6, message: body})

      return stateCopy
    }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer