import styled, { css } from 'styled-components';
import colors from '../../assets/colors';

export const Button = styled.button`
  border: solid 1px;
  border-color: ${props => (props.disabled ? '#ccc' : 'black')};
  color: ${props => (props.disabled ? '#ccc' : 'white')};
  background-color: blue;
  padding: 0.4em 9em;
  display: block;
  font-size: 1em;
  margin: 0 5px;
  outline: none;
  box-shadow: 3px 3px 0px black;

  &:hover {
    cursor: pointer;
    background-color: salmon;
    color: #fff;
  }

  ${props => props.busy && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const ErrorSpan = styled.div`
  font-size: 12px;
  margin-top: 0.2em;
  color: red;
  visibility: ${props => (props.errors ? 'visible' : 'hidden')};
  position: relative;
  height: 14px;
`;

export const Form = styled.form`
  margin: 2em 0;
  text-align: left;
  padding: 0 8em;
`;

export const H2 = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
`;

export const Input = styled.input`
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1.5em 2.8em;
  border: solid 1px;
  border-color: ${props => (props.isErrored ? 'red' : '#ddd')};
  outline: none;
  transition: border ease-in 0.2s;
  min-width: 220px;
  width: 100%;
  color: #2e4053;

  ::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: salmon;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.3em;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: '#2e4053';
`;

export const SecondaryButton = styled(Button)`
  border: none;
  color: ${colors.greyLite};

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${colors.primary};
  }
`;

export const Title = styled(H2)`
  line-height: 1;
  transform: rotate(-12deg);
  width: auto;
  text-align: center;
  margin: 30px auto;
  display: inline-block;
  color: ${colors.primary};
`;

export const FlexBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

export const Span = styled.span`
  font-size: 1rem;
  display: block;
  color: ${colors.greyLite};
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Block = styled.div`
  border-radius: 8px;
  width: 600px;
  background: #fff;
  padding: 20px 40px;
`;

export const FieldWrapper = styled.div`
  margin: 0.8em 0;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 2.9em;
  left: 0.8em;
`