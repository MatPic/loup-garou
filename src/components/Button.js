import React from 'react';
import styled from "styled-components";

const styles = `
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightblue;
  padding: 1em 1em;
  display: flex;
  cursor: pointer;
  color: lightblue;
`;

const CustomizedButton = styled.button`
  ${styles}
  & a {
    text-decoration: none;
    color: lightblue;
  }
  
  &:hover {
    background-color: lightblue;
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