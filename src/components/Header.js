import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const HeaderStyle = `
  width: 100%;
  padding: 20px;
  color: #fff;
`;

const CustomizedHeader = styled.header`
  ${HeaderStyle}
  background-color: steelblue;
  
  & a {
    text-decoration: none;
    color: #fff;
  }
`;

// const LinkToMenu = styled.button`
//   background: transparent;
  
//   & a {
//     text-decoration: none;
//   }
// `;

const Header = () => {
  return (
    <CustomizedHeader><FontAwesomeIcon icon={ faWolfPackBattalion }/>
      <Link to="/">   Le fameux jeu du Loup-Garou</Link>
    </CustomizedHeader>
  );
};

export default Header;