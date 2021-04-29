import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';
import { useEffect } from 'react';
import { useHistory } from 'react-router'
import SingleRecipe from './SingleRecipe'

const LoggedInLanding = (props) => {
  const { getRecipes } = props;
  const { push } = useHistory();

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const addHandler = (e) => {
    e.preventDefault();
    push('/recipes/add')
  }


  return (
  <div>
    <button onClick={addHandler}>Add Recipe</button>
    <div>
    {props.allRecipes.map(recipe => {
      return(
        <SingleRecipe key={recipe.recipe_id} recipe={recipe}/>
      )
    })}
    </div>
  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    allRecipes: state.recipeReducer.allRecipes
  };
};

export default connect(mapStateToProps, { getRecipes })(LoggedInLanding);
