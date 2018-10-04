import React from 'react';

import InputForm from '../../components/Input/InputForm';

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email: e.target.email.value, password: e.target.password.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <InputForm name="Email" type="default" />
      <InputForm name="Password" type="password" />
      <button type="submit"> ok </button>
    </form>
  );
};

export default LoginPage;
