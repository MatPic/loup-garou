import React from 'react'
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Body = styled.section`
  width: 100%;
  background-color: #eee;
  box-sizing: border-box;
  padding: 40px;
  
  article {
    background-color: #fff;
    padding: 20px;
  }
`;

const Layout = props => {
  return (
      <div>
        <Header/>
        <Body>
          <article>
            {props.children}
          </article>
        </Body>
        <Footer/>
      </div>
  );
};


export default Layout;