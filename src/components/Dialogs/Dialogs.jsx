import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id}/>
  )
  // TODO: сделать мап прямо в ретурне
  let messagesElements = state.messages.map(
    message => <Message message={message.message}/>
  )

  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.message}>
        <div>
          {messagesElements}
        </div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Enter your text'
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>
            send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs