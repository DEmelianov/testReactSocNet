import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          component={"input"}
          name={"login"}
        />
      </div>
      <div>
        <Field
          placeholder={"Pass"}
          component={"input"}
          name={"pass"}
        />
      </div>
      <div>
        <Field
          component={"input"}
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

  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login