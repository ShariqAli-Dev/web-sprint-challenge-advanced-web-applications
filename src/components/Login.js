import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const initialFormState = {
  username: '',
  password: '',
  error: '',
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { push } = useHistory();

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formValues;

    if (!username || !password) {
      setFormValues({
        ...formValues,
        error: 'Username or Password not valid.',
      });
      return;
    }

    if (username === 'Lambda' && password === 'School') {
      axios
        .post('http://localhost:5000/api/login', { username, password })
        .then((res) => {
          localStorage.setItem('token', res.data.payload);
          setFormValues({ ...formValues, error: '' });
          push('/home');
        })
        .catch((err) => {
          console.log(err);
          setFormValues({
            ...formValues,
            error: 'Username or Password not valid.',
          });
        });
    }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid='loginForm' className='login-form'>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              Username
              <input
                value={formValues.username}
                onChange={onChange}
                name='username'
                id='username'
              />
            </label>
          </div>

          <div>
            <label>
              Password
              <input
                value={formValues.password}
                onChange={onChange}
                name='password'
                id='password'
              />
            </label>
          </div>

          <div>
            <button type='submit' id='submit'>
              LogIn
            </button>
          </div>
        </form>
      </div>

      <p id='error' className='error'>
        {formValues.error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
