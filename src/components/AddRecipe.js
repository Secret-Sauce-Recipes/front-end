import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from '../validation/Add-Schema';
import {
  PageStyle,
  FormGroup,
  StyledH2,
  StyledH3,
  StyledLabel,
  StyledTextArea,
  StyledInput,
  Btn,
  StyledFirstDiv,
  StyledSecondDiv,
  StyledThirdDiv,
  ValidationErrs,
  ButtonDiv,
  StyledDd,
} from '../style/component-styles';

const recipeObj = {
  recipe_id: '',
  recipe_name: '',
  recipe_img: '',
  ingredients: '',
  source: '',
  instructions: '',
  categories: '',
};
const initialFormValues = {
  recipe_name: '',
  recipe_img: '',
  ingredients: '',
  source: '',
  instructions: '',
  categories: '',
};
const initialFormErrors = {
  recipe_name: '',
  ingredients: '',
  instructions: '',
  categories: '',
};

const initialDisabled = true;

export default function AddRecipe() {
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
    };
    setFormValues({ ...recipe, newRecipe });
    setFormValues(initialFormValues);
  };
  const changeSubmitColor = (valid) => {
    if (!valid) {
      var button = document.getElementById('addBtn');
      button.style.backgroundColor = '#81B29A';
    }
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
      changeSubmitColor(!valid);
    });
  }, [formValues]);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setRecipe({ ...recipe, [name]: value });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
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

  return (
    <PageStyle>
      <FormGroup onSubmit={onSubmit}>
        <div className="form-input">
          <StyledH2>Add New Recipe</StyledH2>
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
            <ValidationErrs>{formErrors.recipe_name}</ValidationErrs>
          </label>
          <label>
            Recipe Image :&nbsp;
            <StyledInput
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"></StyledInput>
            {/* <StyledInput
                    value={recipe.recipe_img}
                    onChange={onChange}
                    name="recipe_img"
                    type="text"
                /> */}
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

          <StyledLabel for="Category">
            Category:
            <StyledDd
              name="categories"
              id="categories"
              onChange={onChange}
              value={recipe.categories}>
              <option value="choice">Choose a Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="dinner">Dinner</option>
            </StyledDd>
            <ValidationErrs>{formErrors.categories}</ValidationErrs>
          </StyledLabel>
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
            <ValidationErrs> {formErrors.ingredients}</ValidationErrs>
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
            <ValidationErrs>{formErrors.instructions}</ValidationErrs>
          </label>
        </StyledThirdDiv>
        <ButtonDiv>
          <Btn disabled={disabled} id="addBtn">
            Add Recipe
          </Btn>
        </ButtonDiv>
      </FormGroup>
    </PageStyle>
  );
}
