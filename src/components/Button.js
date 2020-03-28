import React from 'react';
import styled from "styled-components";

const styles = `
  background: transparent;
  border-radius: 3px;
  border: 2px solid steelblue;
  padding: 1em 1em;
  cursor: pointer;
  color: steelblue;
  transition: all .3s;
  white-space: nowrap;
  text-decoration: none;
  font-size: 1em;
  margin: 10px;
  margin-left: 0;
`;

const CustomizedButton = styled.button`
  ${styles}
  & a {
    color: steelblue;
  }
  
  &:hover {
    background-color: steelblue;
    color: white;
    & a {
      color: white;
    }
  }
`;

const Button = (props) => {
  const { onClick, children } = props;
  return (<CustomizedButton onClick={onClick}> { children }</CustomizedButton>);
};

export default Button;