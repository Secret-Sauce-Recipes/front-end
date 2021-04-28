import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import * as yup from "yup";
import  schema from '../validation/Add-Schema'
import axios from 'axios'

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
    color: #3D405B;
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: bold;
`    
const StyledFirstDiv = styled.div`
    border: 3px inset #81B29A;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: left;
    width:60%;
`
const StyledSecondDiv = styled.div`
     border: 3px inset #81B29A;
     border-radius:10px;
    display: flex;
    flex-direction: column;
    //  padding:1rem;
    align-items: left;
    width:65%;
    // padding:.5rem;
`
const StyledThirdDiv = styled.div`
    //border: 1.5px solid black;
    border-radius:10px;
    border: 3px inset #81B29A;
    display: flex;
    flex-direction: column;
    // padding: 1.5rem;
    align-items: left;
     width:65%;
`
const StyledInput = styled.input`
    width: 15rem;
    height: 2vh;
    margin:.5rem;
     //padding:2px;
`
const StyledTextArea = styled.textarea`
    height: 30vh;
    width:99%;
    resize: none;
    border:none;
    padding:0;
`
const StyledLabel = styled.label`
    margin-right:4rem;
`
const StyledCategory =styled.input`
 margin:.5rem 2.5rem;
width: 15rem;
height: 2vh;
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
    
    height: 3vh;
     align-content:center;
     align-items: center;
    font-size: 1rem;
`
const StyledBtn = styled.button`
    height: 3vh;
    align-content:center;
    margin:.5rem ;
    width: 15rem;
    height: 2.5vh;
`

const StyledDd = styled.select`
margin:.5rem 3rem;
width: 16rem;
height: 2.5vh;
 //margin:.5rem;
padding:2px;
`


const recipeObj = 
{
    recipe_id:'',
    recipe_name:'',
    recipe_img:'',
    ingredients:'',
    source:'',
    instructions:'',
    categories:''
    }
 const initialFormValues = {
        recipe_name:'',
        recipe_img:'',
        ingredients:'',
        source:'',
        instructions:'',
        categories:''
      };

const initialFormErrors = {
        recipe_name: "",
        ingredients: "",
        instructions: "",
        categories: "",
      };

    const initialDisabled = true;


export default function AddRecipe(){
const [recipe, setRecipe] = useState(recipeObj);
const [formValues, setFormValues] = useState(initialFormValues); 
const [formErrors, setFormErrors] = useState(initialFormErrors); 
const [disabled, setDisabled] = useState(initialDisabled); 

const onSubmit = (evt) => {
    evt.preventDefault();
    const newRecipe = {
        recipe_name: formValues.recipe_name.trim(),
        recipe_img: formValues.recipe_img.trim(),
        ingredients: formValues.ingredients.trim(),
        source: formValues.source.trim(),
        instructions: formValues.instructions.trim(),
        categories: formValues.categories,
    }
     //ToDO
    //  postNewRecipe(newRecipe);
    setFormValues({...recipe,newRecipe});
    setFormValues(initialFormValues);
   

  };
  //ToDO
  //Post stub
  const postNewRecipe = (newRecipe) => {
    axios
      .post("", newRecipe)
      .then((res) => {
        setRecipe([res.data, ...recipeObj]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
   
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
      
    });
  }, [formValues]);

  const onChange = (evt) => {
     const { name, value } = evt.target;
    setRecipe({...recipe,[name]:value});
    yup
    .reach(schema, name) 
    .validate(value) 
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

    setFormValues({
        ...formValues,
        [name]: value, 
      });
    
  };
  
    return(
    <PageStyle>
     <FormGroup onSubmit={onSubmit}>
        <div className="form-input">
        <StyledH2>Add  New Recipe</StyledH2>
        </div>
        <StyledFirstDiv>
    
            <label>
                Recipe Name :&nbsp;
                <StyledInput
                    value={recipe.recipe_name}
                    onChange={onChange}
                    name="recipe_name"
                    type="text"
                />
                <div> {formErrors.recipe_name}</div>
            </label>
            <label>
            {/* <label for="avatar">Choose a profile picture:</label> */}
                Recipe Image :&nbsp;
                <StyledInput type="file" id="avatar" name="avatar"
                accept="image/png, image/jpeg"></StyledInput>
            </label>
            
            <label>
                Source Name :&nbsp;
                <StyledInput
                    value={recipe.source}
                    onChange={onChange}
                    name="source"
                    type="text"
                />
                
            </label>

                <label for="Category">Category:

                    <StyledDd name="categories" id="categories" onChange={onChange} value={recipe.categories}>
                    <option value="choice">Choose a Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="brunch">Brunch</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="dinner">Dinner</option>
                    </StyledDd>
                    <div> {formErrors.categories}</div>
                    </label>
                   
            </StyledFirstDiv>
            <div>
                <StyledH3>Ingredients</StyledH3>
            </div>
        <StyledSecondDiv> 
            <label>
                <StyledTextArea
                    value={recipe.ingredients}
                    onChange={onChange}
                    name="ingredients"
                    type="text"
                />
                 <div> {formErrors.ingredients}</div>
            </label>
        </StyledSecondDiv>
        <div>
            <StyledH3>Instructions</StyledH3>
        </div>
        <StyledThirdDiv>        
            <label>
            <StyledTextArea
                value={recipe.instructions}
                onChange={onChange}
                name="instructions"
                type="text"
            />
             <div> {formErrors.instructions}</div>
            </label>
        </StyledThirdDiv>
        <ButtonDiv>
            <Btn disabled={disabled} >Add Recipe</Btn>
        </ButtonDiv>
    </FormGroup>
       
 </PageStyle>

    );
}