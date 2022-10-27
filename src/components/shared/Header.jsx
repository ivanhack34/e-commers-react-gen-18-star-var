import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
     
  return (
      <header className='header'>
        <h1 className="header__title">
            <Link to='/'>e-commerce</Link>
        </h1>
            <label className='header__menu-icon' htmlFor='menu__header'>Menu</label>
            <input type="checkbox" id='menu__header' className='check__header-menu'/>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header__item'>
                    <NavLink className={
                        ({isActive}) => !isActive ? " header__link" : "link-active"} 
                        to='/login'>
                        <i className="fa-regular fa-user"></i>
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink className={
                        ({isActive}) => !isActive ? " header__link" : "link-active"}
                        to='/purchases'>
                        <i className="fa-solid fa-box-archive"></i>
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink className={
                        ({isActive}) => !isActive ? " header__link" : "link-active"}
                        to='/cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header