import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons';

const HeaderStyle = `
  width: 100%;
  padding: 20px;
  color: #fff;
`;

const CustomizedHeader = styled.header`
  ${HeaderStyle}
  background-color: steelblue;
`;

const Header = () => {
  return (<CustomizedHeader><FontAwesomeIcon icon={ faWolfPackBattalion } />  Le fameux jeu du Loup-Garou</CustomizedHeader>);
};

export default Header;