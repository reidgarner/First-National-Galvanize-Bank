import React from 'react';

const SignUpForm = (props) => {
  return (
    <div>
      <h3>Create an Account</h3>
      <form onSubmit= {(event) => props.onHandleSubmit(
        event,
        props.Username,
        props.FirstName,
        props.LastName,
        props.Email,
        props.Password
      )}>
        <input type="text" class="form-check-input" name="Username" id="" placeholder="Username" onChange= {props.onChangeInput} />
        <input type="text" class="form-check-input" name="FirstName" id="" placeholder="First Name" onChange= {props.onChangeInput} />
        <input type="text" class="form-check-input" name="LastName" id="" placeholder="Last Name" onChange= {props.onChangeInput} />
        <input type="text" class="form-check-input" name="Email" id="" placeholder="Email" onChange= {props.onChangeInput} />
        <input type="text" class="form-check-input" name="Password" id="" placeholder="Password" onChange= {props.onChangeInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm