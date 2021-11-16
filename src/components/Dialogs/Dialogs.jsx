import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(
    dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  )

  let messagesElements = state.messages.map(
    message => <Message message={message.message} key={message.id}/>
  )

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to='/Login'/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.message}>
        <div>
          {messagesElements}
        </div>
      </div>
      <AddMessageFormRedux
        onSubmit={addNewMessage}
      />
    </div>
  )
}

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>
          send
        </button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs