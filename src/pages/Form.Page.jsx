import React from 'react'

const FormPage = () => {

  //state
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  //handlers
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }
  const emailChangeHandler = (e) => { 
    setEmail(e.target.value)
  }
  const formHandler = (event) => { 
    event.preventDefault();
    console.log({name: name, email: email})
  }
  return (
    <div className="container">
      <form onSubmit={(e) => formHandler(e)}>
        <div>
          <label>Name:</label>
          <input onChange={(e) => nameChangeHandler(e)} type="text" placeholder='username' required />
        </div>
        <div>
          <label>Email:</label>
          <input onChange={(e)=>emailChangeHandler(e)} type="email" placeholder='user@mail.com' required />
        </div>
        <div>
          <input type="checkbox" required />
          <label>I agree all the terms and conditions.</label>
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormPage