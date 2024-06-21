import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './navbar.scss';

const Navbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className='navbar' >
      navbar
      <button  onClick={toggleTheme} >Switch to {theme==='dark'?'light':'dark'} Theme</button>
    </div>
  )
}

export default Navbar
