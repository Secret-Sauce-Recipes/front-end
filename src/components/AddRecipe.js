import React, {useState} from "react";
import styled from 'styled-components'

//Styles
const PageStyle = styled.div`
    box-sizing: border-box;
    background-color:#fefae0;
    width:100%;
    //border: 1px solid blue;
    display: flex;
    justify-content: center;
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
    `

    const StyledH2 = styled.h2`
    height: 2vh;
    display:flex;
    justify-content: center;
    color: #3D405B;
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: bold;
`    
const StyledH3 = styled.h3`
  
    height: 1vh;
    display:flex;
    justify-content: left;
    color: black;
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: bold;
`    

const StyledFirstDiv = styled.div`
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: left;
    width:60%;
`
const StyledSecondDiv = styled.div`
     //border: 1.5px solid black;
    display: flex;
    flex-direction: column;
     padding:1rem;
    align-items: left;
    width:65%;
    padding:.5rem;
`
const StyledThirdDiv = styled.div`
    //border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: left;
    //margin: 1.5rem;
    width:65%;
`
const StyledInput = styled.input`
    width: 15rem;
    height: 2.5vh;
    margin:.5rem;
     //padding:2px;
`
const StyledTextArea = styled.textarea`
    width: 20rem;
    height: 25vh;
    width:100%;
    resize: none;
`
const StyledLabel = styled.label`

margin-right:4rem;
`
const StyledDate =styled.input`
 margin:.5rem 3.8rem;
width: 15rem;
height: 2.5vh;
 //margin:.5rem;
padding:2px;
`
const StyledCategory =styled.input`
 margin:.5rem 2rem;
width: 15rem;
height: 2.5vh;
 //margin:.5rem;
padding:2px;
`
const StyledInput2 =styled.input`
margin:.5rem 1.5rem;
width: 15rem;
 height: 2.5vh;
padding:2px;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    margin: 1.5rem;
`
const Btn = styled.button`
     display: flex;
     justify-content: center;
    background-color: #81B29A;
    
    height: 5vh;
     align-content:center;
     align-items: center;
    font-size: 1rem;
`


const recipeObj = 
{
recipe_id:0,
recipe_name: "",
ingredients: [{
ingredient_name: "",
ingredient_quantity: 0,
ingredient_unit:""
}],
source: '',
instructions: [{
instruction_id: 0,
instruction_text: ''
}],
categories: []
}




export default function AddRecipe(){
const [recipe, setRecipe] = useState(recipeObj);
const onSubmit = (evt) => {
    evt.preventDefault();
  };

  const onChange = (evt) => {
     const { name, value } = evt.target;
    setRecipe({...recipe,[name]:value});
  };
  
    return(
    <PageStyle>
     <FormGroup onSubmit={onSubmit}>
        <div className="form-input">
        <StyledH2>Add  New Recipe</StyledH2>
        </div>
        <StyledFirstDiv>
            <label>
                Date : &nbsp;
                <StyledDate
                    value={recipe.date}
                    onChange={onChange}
                    name="date"
                    type="text"
                />
            </label>
            
            <label>
                Username :&nbsp;
                <StyledInput2
                    value={recipe.username}
                    onChange={onChange}
                    name="username"
                    type="text"
                />
            </label>
            <label>
                Recipename :&nbsp;
                <StyledInput
                    value={recipe.recipename}
                    onChange={onChange}
                    name="recipename"
                    type="text"
                />
            </label>
            <label>
                Category :&nbsp;
                <StyledCategory
                    value={recipe.category}
                    onChange={onChange}
                    name="category"
                    type="text"
                />
                </label>
            </StyledFirstDiv>
            <div>
                <StyledH3>Ingredients</StyledH3>
            </div>
        <StyledSecondDiv> 
            <label>
                <StyledTextArea
                    value={recipe.ingredients_name}
                    onChange={onChange}
                    name="ingredients"
                    type="text"
                />
            </label>
        </StyledSecondDiv>
        <div>
            <StyledH3>Instructions</StyledH3>
        </div>
        <StyledThirdDiv>        
            <label>
            <StyledTextArea
                value={recipe.instruction_text}
                onChange={onChange}
                name="instructions"
                type="text"
            />
            </label>
        </StyledThirdDiv>
        <ButtonDiv>
            <Btn>Add Recipe</Btn>
        </ButtonDiv>
    </FormGroup>
       
 </PageStyle>

    );
}