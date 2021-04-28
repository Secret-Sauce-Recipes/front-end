import styled from "styled-components";

// STYLES COPIED FROM AddRecipe.js - SHOULD BE REFACTORED
//Styles
// Had to change flex-direction from PageStyle, so renamed it LoginStyles
const LoginStyle = styled.div`
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 15rem;
  height: 2.5vh;
  margin: 0.5rem;
  padding: 2px;
`;
const Btn = styled.button`
  //  display: flex;
  //  justify-content: center;
  background-color: #e07a5f;
  width: 10%;
  height: 5vh;
  //  align-content:center;
  //  align-items: center;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 2px;
`;

const ValidationErrs = styled.div`
  color: red;
  font-family: sans-serif;
  font-size: .75rem;
  font-weight: bold;
  width: 50%;
  margin: 0 auto;
//   text-align: left;
  align-items: left;
  justify-content: left;
  // border: 1px solid red;
`;

export { LoginStyle, StyledInput, Btn, ValidationErrs };
// export default style;