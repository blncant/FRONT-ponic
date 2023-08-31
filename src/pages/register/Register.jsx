import React from 'react';
import { Formik } from 'formik';
import LoginInput from '../../components/UI/login/LoginInput';
import Submit from '../../components/UI/submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';

import { setCurrentUser } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { createUser } from '../../axios/axiosUser';
import { useNavigate } from 'react-router-dom';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';



const Register = () => {
  const dispatch = useDispatch()
  /* const { state } = useLocation()
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/'); */
  const navigate = useNavigate(); 
  
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
  initialValues={registerInitialValues}
  validationSchema={registerValidationSchema}
  onSubmit={async (values, actions) => {
    const user = await createUser(values.name, values.email, values.password);
    actions.resetForm();
    
    if (user) {
        console.log("User:", user);
        console.log("User Verified:", user.usuario.verified);
      dispatch(setCurrentUser({
        ...user.usuario,
        token: user.token,
      }));
      
      if (user.usuario.verified) {
        console.log("Navigating to Home");
        navigate('/');
      } else {
        console.log("Navigating to Validate");
        navigate('/validate');
      }
    }
  }}
>
        <Form>
          <LoginInput type='text' name='name' placeholder='Nombre' />
          <LoginInput type='text'  name='email' placeholder='Email' />
          <LoginInput type='password'  name='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button'>
            Registrate
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;

