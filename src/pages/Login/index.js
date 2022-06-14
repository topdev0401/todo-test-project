import React, { Fragment, useState } from 'react';
// Hooks
import useForm from '../../hooks/useForm';
// Validation rules
import validate from './ValidationRules';
// Components
import { Field, Styled } from '../../components/login';
// actions
import loginAction from '../../actions/loginAction';
// layout
import Layout from '../../layout';
// navigate
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const { values, handlers, errors } = useForm(login, validate);

  const [busy, setBusy] = useState(false);
  const [responseError, setError] = useState('');

  function login() {
    setBusy(true);
    if(Object.keys(errors).length === 0) {
      loginAction(values, setBusy, navigate, setError);
    }
  }

  return (
    <Layout>
        <Styled.Container>
          <Styled.Block>
            <Fragment>
              <Styled.FlexBlock>
                <Styled.Title>
                  <Styled.Span>Hello, Rapptr Labs Team! <br></br> Thanks for your consideration about my test project!!</Styled.Span>
                </Styled.Title>
              </Styled.FlexBlock>
              <Styled.H2>Rapptr Labs</Styled.H2>
              <Styled.Form onSubmit={handlers.handleSubmit}>
                <Field
                  errors={errors}
                  label="Email"
                  type="text"
                  placeholder="user@rapptrlabs.com"
                  name="email"
                  onChange={handlers.handleChange}
                  onBlur={handlers.handleBlur}
                  onFocus={handlers.handleFocus}
                  value={values.email}
                  isRequired
                  iconName={'userIcon'}
                />
                <Field
                  errors={errors}
                  label="Password"
                  type="password"
                  placeholder="Must be at least 4 characters"
                  name="password"
                  onChange={handlers.handleChange}
                  onBlur={handlers.handleBlur}
                  onFocus={handlers.handleFocus}
                  value={values.password}
                  isRequired
                  iconName={'lockIcon'}
                />
                <Styled.FlexBlock>
                  <Styled.Button type="submit" busy={busy}>Login</Styled.Button>
                </Styled.FlexBlock>
              </Styled.Form>
              <Styled.FlexBlock>
                <Styled.ErrorSpan errors={responseError}> {responseError} </Styled.ErrorSpan>
              </Styled.FlexBlock>
            </Fragment>
          </Styled.Block>
        </Styled.Container>
      </Layout>
  );
}

export default LoginForm;
