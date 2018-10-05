import React from 'react';
import Button from '@material-ui/core/Button';

import InputForm from '../../components/Input/InputForm';

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    // handleSubmit({ email: e.target.email.value, password: e.target.password.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <InputForm id="email" name="Email" type="default" />
      <InputForm id="password" name="Password" type="password" />
      <Button variant="contained" color="green" type="submit"> ok </Button>
    </form>
  );
};

export default LoginPage;
