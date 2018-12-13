import React from 'react';

const SignUpForm = (props) => {
  return (
    <div>
      <h3>Create an Account</h3>
      <form>
        <input type="text" class="form-check-input" name="" id="" placeholder="Username" />
        <input type="text" class="form-check-input" name="" id="" placeholder="First Name" />
        <input type="text" class="form-check-input" name="" id="" placeholder="Last Name" />
        <input type="text" class="form-check-input" name="" id="" placeholder="Email" />
        <input type="text" class="form-check-input" name="" id="" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm