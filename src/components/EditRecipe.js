import React, {useState} from 'react'
import styled from 'styled-components'

const PageStyle = styled.div`
    box-sizing: border-box;
    background-color:#fefae0;
    width:100%;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
`
const FormGroup = styled.div`
	color: black;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
	width: 90%;
    margin: 0 auto;
    justify-content: center;
`
const StyledInput = styled.input`
    width: 20rem;
    height: 3.5vh;
`
const StyledTextArea = styled.textarea`
    width: 20rem;
    height: 25vh;
`
const StyledFirstDiv = styled.div`
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    margin: 1.5rem;
`
const StyledSecondDiv = styled.div`
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    margin: 1.5rem;
`
const StyledThirdDiv = styled.div`
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    margin: 1.5rem;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`
const Btn = styled.button`
    background-color: red;
    width: 10%;
    height: 5vh;
    display:flex;
    justify-content: center;
    align-content:center;
    align-items: center;
    font-size: 1rem;
`
const EditRecipe = () => {
    const recipeObj =  {
    recipe_name: '',
    ingredients: [{
    ingredient_name: '',
    ingredient_quantity: 0,
    ingredient_unit: ''
    }],
    source: '',
    instructions: [{
    instruction_id: '',
    instruction_text: ''
    }],
    categories: []
    }
    const [recipe, setRecipe] = useState(recipeObj)
    const onChange = (evt) => {
        setRecipe({...recipe, [evt.target.name]: evt.target.value})
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
        <PageStyle>
            <FormGroup onSubmit={onSubmit}>
        <StyledFirstDiv>
            <label>
              Recipe Name
              <StyledInput
                value={recipe.recipe_name}
                onChange={onChange}
                name="recipe_name"
                type="text"
              />
              </label>
            <label>
              Source
              <StyledInput
                value={recipe.source}
                onChange={onChange}
                name="source"
                type="text"
              />
            </label>
            <label>
              Categories
              <StyledInput
                value={recipe.categories}
                onChange={onChange}
                name="categories"
                type="text"
              />
            </label>
        </StyledFirstDiv>
        <StyledSecondDiv>
            <label>
              Ingredients
              <StyledTextArea
                value={recipe.ingredients.ingredient_name}
                onChange={onChange}
                name="ingredient_name"
                type="text"
              />
            </label>
        </StyledSecondDiv>
        <StyledThirdDiv>
            <label>
              Instructions
              <StyledTextArea
                value={recipe.instructions.instruction_text}
                onChange={onChange}
                name="instruction_text"
                type="text"
              />
            </label>
        </StyledThirdDiv>
        <ButtonDiv>
            <Btn> Submit Recipe </Btn>
        </ButtonDiv>
            </FormGroup>
        </PageStyle>
    )
}
export default EditRecipe