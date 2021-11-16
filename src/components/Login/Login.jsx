import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

export const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          component={Input}
          name={"login"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          placeholder={"Pass"}
          component={Input}
          name={"pass"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={"checkbox"}
          name={"rememberMe"}
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log('11111111111')
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login