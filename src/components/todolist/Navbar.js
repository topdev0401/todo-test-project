import * as Styled from './todoList.style'
import { useNavigate } from 'react-router-dom';

const navStyle = {
  margin: "20px",
  display: 'flex',
  justifyContent: 'right'
}

const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandle = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <div style={navStyle}>
      <Styled.Button onClick={logoutHandle}> Log out </Styled.Button>
    </div>
  )
}

export default Navbar;