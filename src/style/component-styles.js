import styled from 'styled-components';

    // within the tick marks in a style definition, responsive changes would go here:
    // @media (max-width: 800px) {
    //   flex-direction: column;
    // }


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
  width: 25%;
  height: 5vh;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 2px;
`;

const PageStyle = styled.div`
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: sans-serif;
`;
const RecipeImage = styled.img`
  max-width: 50%;
  height: auto;
`
const RecipeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  box-sizing: border-box;
  background-color: #fefae0;
  margin-left: auto;
  margin-right: auto;
  margin-botton:3%
  padding: 3%;
  width: 70%;
  border: solid black 1px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  font-family: sans-serif;
`;

const RecipeTextDiv = styled.div`
width: 50%;
margin-left:2%;
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
  border: 1px solid #3d405b;
  align-items: center;
`;

const StyledH2 = styled.h2`
  height: 2vh;
  display: flex;
  justify-content: center;
  color: #3d405b;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
`;
const StyledH3 = styled.h3`
  height: 1vh;
  display: flex;
  justify-content: left;
  color: #3d405b;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 15rem;
  height: 2vh;
  margin: 0.5rem;
  //padding:2px;
`;
const StyledTextArea = styled.textarea`
  height: 30vh;
  width: 99%;
  resize: none;
  border: none;
  padding: 0;
`;
const TextSpan = styled.span`
margin-left: 1rem;
`

const StyledInput2 = styled.input`
  margin: 0.5rem 1.5rem;
  width: 15rem;
  height: 2.5vh;
  padding: 2px;
`;
const StyledLabel = styled.label`
  margin-left: 3rem;
`;
// const StyledCategory =styled.select`
//  margin:.5rem 2rem;
//  width: 12rem;
//  height: 2vh;
//  padding:2px;
// `

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  align-content: center;
  margin: 1.5rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  background-color: #e07a5f;
  height: 3vh;
  align-content: center;
  align-items: center;
  font-size: 1rem;
`;

const StyledBtn = styled.button`
  height: 3vh;
  align-content: center;
  margin: 0.5rem;
  width: 15rem;
  height: 2.5vh;
`;

//dropdown
const StyledDd = styled.select`
  margin: 0.5rem 3rem;
  width: 16rem;
  height: 2.5vh;
  padding: 2px;
`;
const StyledFirstDiv = styled.div`
  border: 10px inset #81b29a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  width: 60%;
`;
const StyledSecondDiv = styled.div`
  border: 10px inset #81b29a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 65%;
`;
const StyledThirdDiv = styled.div`
  border-radius: 10px;
  border: 10px inset #81b29a;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 65%;
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


export {
  LoginStyle,
  PageStyle,
  FormGroup,
  StyledH2,
  StyledH3,
  StyledLabel,
  StyledTextArea,
  StyledInput2,
  StyledInput,
  Btn,
  StyledBtn,
  StyledFirstDiv,
  StyledSecondDiv,
  StyledThirdDiv,
  ValidationErrs,
  ButtonDiv,
  StyledDd,
  LandingStyle,
  LoginBtn,
  LoginFormDiv,
  TextSpan,
  RecipeCard,
  RecipeImage,
  RecipeTextDiv
};
