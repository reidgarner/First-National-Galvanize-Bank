import React from 'react';

const SignInForm = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={(event) => props.onHandleSubmit(
        event,
        props.Username,
        props.Password
      )}>
        <input type="text" className="form-check-input" name="Username" id="" placeholder="Username" value={props.Username} onChange={props.onChangeInput} />
        <input type="text" className="form-check-input" name="Password" id="" placeholder="Password" value={props.Password} onChange={props.onChangeInput} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm