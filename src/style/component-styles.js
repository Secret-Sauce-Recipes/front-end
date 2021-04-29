import styled from "styled-components";

//Styles
const StyledFirstDiv = styled.div`
    border: 3px inset #81B29A;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: left;
    width:60%;
`
const LoginFirstDiv = styled.div`
    border: 3px inset #81B29A;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    align-content: center;
    width:100%;
    // height: 15vh;
    `
const FormGroup = styled.div`
	color: black;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid #3D405B;
  align-items:center;
  `;
const StyledH2 = styled.h2`
  height: 2vh;
  display:flex;
  justify-content: center;
  color: #3D405B;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  `;
    // Had to change flex-direction from PageStyle, so renamed it LoginStyle
const LoginStyle = styled.div`
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
const StyledInput = styled.input`
    width: 15rem;
    height: 2vh;
    margin:.5rem;
     //padding:2px;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    align-content: center;
    margin: 1.5rem;
`
const Btn = styled.button`
   display: flex;
   justify-content: center;
  background-color: #e07a5f;
  width: 100%;
  height: 5vh;
   align-content:center;
   align-items: center;
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

export { LoginStyle, StyledInput, Btn, ValidationErrs, ButtonDiv, StyledH2, FormGroup, StyledFirstDiv, LoginFirstDiv };