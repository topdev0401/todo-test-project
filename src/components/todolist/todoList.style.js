import styled, { css } from 'styled-components';

export const Board = styled.div`
    border: 3px solid black;
    border-radius: 10px;
    width: 300px;
    height: 50vh;
    padding: 10px 0
`
export const Button = styled.button`
    border: solid 1px;
    border-color: ${props => (props.disabled ? '#ccc' : 'black')};
    color: ${props => (props.disabled ? '#ccc' : 'black')};
    background-color: white;
    padding: 0.2em 5em;
    display: block;
    font-size: 1em;
    margin: 0 5px;
    outline: none;
    box-shadow: 3px 3px 0px black;

    &:hover {
    cursor: pointer;
    background-color: grey;
    color: #fff;
    }

    ${props => props.busy && css`
    pointer-events: none;
    opacity: 0.5;
    `}
`;

export const NewButton = styled.button`
    border: solid 1px;
    border-color: ${props => (props.disabled ? '#ccc' : 'black')};
    color: ${props => (props.disabled ? '#ccc' : 'white')};
    background-color: blue;
    padding: 0.2em 1em;
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

export const SearchInput = styled.input`
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px 18px;
    width: 30%;

    ::placeholder {
        color: #bbb;
    }
`
export const TodoBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const FieldWrapper = styled.div`
  margin: 0.8em 0;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.1em;
  left: 0.4em;
`

export const H2 = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
`;

export const List = styled.ul`
    padding: 0px;
    height: 300px;
    overflow: overlay;
`

export const Item = styled.li`
  display: flex;
  width: 94.5%;
  justify-content: space-between;
  border: 3px solid black;
  padding: 3px 5px;
`

export const IconButton = styled.button` 
    margin-left: 5px;
    background-color: white;
    border: 0;
`

export const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SaveButton = styled.button`
  border: solid 1px;
  border-color: ${props => (props.disabled ? '#ccc' : 'black')};
  color: ${props => (props.disabled ? '#ccc' : 'white')};
  background-color: #030303;
  padding: 0.2em 1.2em;
  display: block;
  font-size: 1em;
  margin: 0 5px;
  outline: none;
  box-shadow: 3px 3px 0px #030303;

  &:hover {
  cursor: pointer;
  background-color: grey;
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