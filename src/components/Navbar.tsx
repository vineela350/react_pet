// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Nav>
  );
};

export default Navbar;
