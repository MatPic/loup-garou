import React from 'react';
import styled from "styled-components";

const FooterStyle = `
  width: 100%;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const CustomizedFooter = styled.footer`
  ${FooterStyle}
  background-color: steelblue;
`;

const Footer = () => {
  return (<CustomizedFooter>Ceci est un footer original</CustomizedFooter>);
};

export default Footer;