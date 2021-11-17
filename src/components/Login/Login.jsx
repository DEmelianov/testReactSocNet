import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30)

export const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          component={Input}
          name={"email"}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          component={Input}
          type={"password"}
          name={"password"}
          validate={[required, maxLength30]}
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
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login, logout})(Login)
