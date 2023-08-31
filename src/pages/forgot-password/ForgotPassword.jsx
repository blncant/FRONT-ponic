import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/login/LoginInput';
import Submit from '../../components/UI/submit/Submit';

import {
  ForgotContainerStyled,
  ForgotEmailStyled,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
  
    console.log(values);
  };

  return (
    <ForgotContainerStyled>
      <h1>Reestablecer contraseña</h1>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {formik => (
          <Form>
            <LoginInput name="email" type="text" placeholder="Mail de recuperación" />
            {/* <ForgotEmailStyled onClick={() => navigate('/login')}>
              Si recordas tu contraseña, volve.
            </ForgotEmailStyled> */}
            <Submit type="submit">
              ENVIAR
            </Submit>
          </Form>
        )}
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;