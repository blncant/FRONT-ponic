import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/login/LoginInput';
import Submit from '../../components/UI/submit/Submit';

import { Form, ValidateContainerStyled } from './ValidateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axiosUser';
import { validateInitialValues, validateValidationSchema } from '../../formik';
import { setVerified } from '../../redux/user/userSlice';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async values => {
          try {
            await verifyUser(currentUser.email, values.code);
            // Usuario verificado en Redux state
            dispatch(setVerified());
            // Ir a home cuando se valide
            navigate('/');
          } catch (error) {
            
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <LoginInput name='code' type='code' placeholder='code' />
            <Submit>Validar</Submit>
          </Form>
        )}
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
