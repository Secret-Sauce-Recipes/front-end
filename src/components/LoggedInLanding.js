import { connect } from 'react-redux';
import { getRecipe } from '../actions/recipeActions';
import { useEffect } from 'react';

const LoggedInLanding = (props) => {
  const { getRecipe } = props;

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  return <div>{props.getRecipe}</div>;
};

const mapStateToProps = (state) => {
  return {
    recipe_id: state.recipeReducer.recipe_id,
    recipe_img: state.recipeReducer.recipe_img,
    source: state.recipeReducer.source,
    category: state.recipeReducer.category,
    ingredients: state.recipeReducer.ingredients,
    instructions: state.recipeReducer.instructions,
    recipe_name: state.recipeReducer.recipe_name,
  };
};

//! mapStateToProps recipes,error,isLoading etc
//!display oin this page
export default connect(mapStateToProps, { getRecipe })(LoggedInLanding);
