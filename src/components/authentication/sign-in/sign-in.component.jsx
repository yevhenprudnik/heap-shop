import { useState } from 'react';
import FromInput from '../../form-input/form-input.component';
import { signInWith } from '../auth.helpers';
import Button from '../../button/button.component';
import './sign-in.styles.scss';

const defaultFromValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formValues, setFormValues] = useState(defaultFromValues);
  const { email, password } = formValues;

  const handleChange = event => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await signInWith.emailAndPassword(email, password);

      setFormValues(defaultFromValues);
    } catch (error) {
      console.log('Error while signing in user: ', error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FromInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWith.google}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
