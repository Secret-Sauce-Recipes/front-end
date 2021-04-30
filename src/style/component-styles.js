import styled from 'styled-components';

const LoginStyle = styled.div`
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
const LandingStyle = styled.div`
  color: #3d405b;
  font-family: sans-serif;
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
const LoginBtn = styled.button`
  background-color: #e07a5f;
  width: 30%;
  height: 2.5vh;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 2px;
  border-radius:20px;
`;

const PageStyle = styled.div`
  box-sizing: border-box;
  //background-color: #fefae0;
  background-color:#1d2441;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
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
  border: 1px solid #3d405b;
  align-items: center;
`;

const LoginH1 = styled.h1`
  height: 2vh;
  display: flex;
  justify-content: center;
  color:#71090d;
  font-family: sans-serif;
  font-size: 4rem;
  font-weight: bold;
  padding:2rem;
  margin-top:0;
`;

const StyledH1 = styled.h1`
  height: 2vh;
  display: flex;
  justify-content: center;
  color: #e07a5f;
  font-family: sans-serif;
  font-size: 4rem;
  font-weight: bold;
  padding:2rem;
  margin-top:0;
`;

const StyledH2 = styled.h2`
  height: 2vh;
  display: flex;
  justify-content: center;
  //color: #3d405b;
  color:#fde151;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  font-style:Italic;
`;
const StyledH3 = styled.h3`
  height: 1vh;
  display: flex;
  justify-content: left;
  color:#fde151;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  font-style:Italic;
`;

const StyledH4 = styled.h4`
  height: 1vh;
  display: flex;
  justify-content: center;
  color:  #e07a5f;
  font-family: sans-serif;
  font-style:Italic;
  font-size: 2rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  display:flex;
  align-content:center;
  width: 15rem;
  height: 2vh;
  margin: 0.5rem;
  padding:2px;
  border-radius:20px;
  text-align:center;
`;

const StyledInput2 = styled.input`
  margin: 0.5rem 1.5rem;
  width: 15rem;
  height: 2.5vh;
  padding: 2px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  align-content: center;
  margin: 1.5rem;
`;

const StyledDiv2 = styled.div`
margin:0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  background-color: #e07a5f;
  height: 3vh;
  align-content: center;
  align-items: center;
  font-size: 1rem;
  text-align-last: center;
  border-radius:20px;
`;

const StyledBtn = styled.button`
  height: 3vh;
  align-content: center;
  margin: 0.5rem;
  width: 15rem;
  height: 2.5vh;

`;

const StyledBtn2 = styled.button`
  height: 3vh;
  align-content: center;
  margin: 0.5rem;
  width: 10rem;
  height: 2.5vh;
  background-color: #81B29A;
  text-align-last: center;
  border-radius:20px;
  justify-content:right;
  margin-top:1.5rem;
  margin-left:2rem;
`;

const StyledLabel = styled.label`
  margin-right: 12rem;
`;

//dropdown
const StyledDd = styled.select`
   margin: .5rem 3rem;
  width: 16rem;
  height: 2.5vh;
  padding: 2px;
  text-align-last: center;
  border-radius:20px;
  border:1.5px solid;
`;

const StyledDd2 = styled.select`
  text-align-last: center;
  border-radius:20px;
  margin: 0.5rem 3rem;
  width: 15.5rem;
  height: 2.5vh;
  padding: 2px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  width: 60%;
`;

const StyledTextArea = styled.textarea`
  height: 30vh;
  width: 65%;
  resize: none;
  border: none;
  border-radius:80px;
  padding:2rem;
  background-color:#fcfdf5;
  
`;

const StyledFirstDiv = styled.div`
  border-radius:90px;
  display: flex;
  justify-content:center;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  width: 65%;
  background-color:#fcfdf5;
  height:30vh;
`;
const StyledSecondDiv = styled.div`
  border-radius: 140px;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: left;
  width: 65%;
  background-color:#fcfdf5;
`;
const StyledThirdDiv = styled.div`
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 65%;
  background-color:#fcfdf5;
`;
const ValidationErrs = styled.div`
  color: red;
  font-family: sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  width: 15rem;
  margin: 0 auto;
  align-items: left;
  justify-content: left;
`;
const LoginFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  align-content: center;
  border: 3px inset #81B29A;
  border-radius:10px;
  box-sizing: border-box;
  background-color: #fefae0;
  width: 20rem;
`;
const BgImgStyle = styled.image`
// box-sizing: border-box;
//background-image: url(' https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
//background-image: url('https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
//background-image: url('https://images.unsplash.com/photo-1612179343574-31b219a3915c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80');
background-image: url('https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1521&q=80');
background-size:cover;
display: flex;
justify-content:center;
 marign:0;
 padding:0;
width:100%;
height:90vh;
background-repeat:no-repeat;
`;

export {
  LoginStyle,
  PageStyle,
  FormGroup,
  LoginH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledLabel,
  StyledTextArea,
  StyledH1,
  StyledInput2,
  StyledInput,
  Btn,
  StyledBtn,
  StyledBtn2,
  StyledDiv,
  StyledFirstDiv,
  StyledSecondDiv,
  StyledThirdDiv,
  ValidationErrs,
  ButtonDiv,
 StyledDiv2,
  StyledDd,
  StyledDd2,
  LandingStyle,
  LoginBtn,
  LoginFormDiv,
  BgImgStyle
};
