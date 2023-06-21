import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link--is-active' : 'header__item-link'
  }
  return (
    <>
      <nav className='header'>
        <NavLink to='/' className='header__logo'>Michi-Market</NavLink>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='signup'>Signup</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/profile'>Profile</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='logout'>Logout</NavLink>
          </li>

        </ul>

      </nav>

    </>
  )
}

export default Navbar
