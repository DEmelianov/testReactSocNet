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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.newMessageBody
          }
        ],
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer