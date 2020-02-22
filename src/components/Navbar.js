import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nes_logo from '../NES_2.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <Nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/* https://www.iconfinder.com/icons/37395/computer_game_console_game_nintendo_iconn */}
        <Link to='/'>
          <img src={nes_logo} alt='NES console' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus ' />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainRed);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
