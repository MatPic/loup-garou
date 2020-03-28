import styled from 'styled-components';

const Input = styled.input`
      outline: none;
      display: block;
      background: #eee;
      width: 100%;
      border: none;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 20px 20px;
      margin-bottom: 15px;
      
      &:focus {
        background: silver;
      }
`;

export default Input;