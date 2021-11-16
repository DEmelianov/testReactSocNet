import React from "react";

const Login = (props) => {
  return (
    <div>
      <h1>Login page</h1>

      <form action="">
        <div>
          <input type="text" placeholder={"Login"}/>
        </div>
        <div>
          <input type="text" placeholder={"Pass"}/>
        </div>
        <div>
          <input type="checkbox"/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login