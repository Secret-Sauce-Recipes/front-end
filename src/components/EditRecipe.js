import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from '../validation/Add-Schema';
import { connect } from 'react-redux';
import { editRecipe, getRecipeId } from '../actions/recipeActions';
import { useHistory, useParams } from 'react-router';
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
  category: '',
};
const initialFormValues = {
  recipe_name: '',
  recipe_img: '',
  ingredients: '',
  source: '',
  instructions: '',
  category: '',
};
const initialFormErrors = {
  recipe_name: '',
  ingredients: '',
  instructions: '',
  category: '',
};

// const initialDisabled = true;

const EditRecipe = (props) => {
  const [recipe, setRecipe] = useState(recipeObj);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [disabled, setDisabled] = useState(initialDisabled);
  const { singleRecipes } = props;
  const { push } = useHistory();
  const { recipeID } = useParams();
  const { getRecipeId } = props;

  useEffect(() => {
    getRecipeId(recipeID);
  }, [getRecipeId, recipeID]);

  console.log(singleRecipes);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newRecipe = {
      recipe_name: formValues.recipe_name.trim(),
      recipe_img: formValues.recipe_img.trim(),
      ingredients: formValues.ingredients.trim(),
      source: formValues.source.trim(),
      instructions: formValues.instructions.trim(),
      category: formValues.category,
    };
    props.editRecipe(recipeID, newRecipe);
    push(`/recipes`);
    console.log('test');
  };

  const changeSubmitColor = (valid) => {
    if (!valid) {
      var button = document.getElementById('addBtn');
      button.style.backgroundColor = '#81B29A';
    }
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      // setDisabled(!valid);
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
      <FormGroup>
        <div className="form-input">
          <StyledH2>Edit Recipe</StyledH2>
        </div>
        <StyledFirstDiv>
          <label>
            Recipe Name :&nbsp;
            <StyledInput
              value={formValues.recipe_name}
              onChange={onChange}
              name="recipe_name"
              type="text"
            />
            <ValidationErrs>{formErrors.recipe_name}</ValidationErrs>
          </label>
          <label>
            Recipe Image :&nbsp;
            <StyledInput
              value={formValues.recipe_img}
              onChange={onChange}
              name="recipe_img"
              type="file"
            />
          </label>

          <label>
            Source Name :&nbsp;
            <StyledInput
              value={formValues.source}
              onChange={onChange}
              name="source"
              type="text"
            />
          </label>

          <StyledLabel htmlFor="Category">
            Category:
            <StyledDd
              name="category"
              id="categories"
              onChange={onChange}
              value={formValues.category}>
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
              value={formValues.ingredients}
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
              value={formValues.instructions}
              onChange={onChange}
              name="instructions"
              type="text"
            />
            <ValidationErrs>{formErrors.instructions}</ValidationErrs>
          </label>
        </StyledThirdDiv>
        <ButtonDiv>
          <Btn onClick={onSubmit} id="addBtn">
            Add Recipe
          </Btn>
        </ButtonDiv>
      </FormGroup>
    </PageStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    singleRecipes: state.recipeReducer.singleRecipes,
    allRecipes: state.recipeReducer.allRecipes,
  };
};

export default connect(mapStateToProps, { editRecipe, getRecipeId })(EditRecipe);
