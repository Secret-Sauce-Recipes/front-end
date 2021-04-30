import { useHistory, useParams } from "react-router";
import { connect } from 'react-redux';
import { deleteRecipe, editRecipe, getRecipeId } from '../actions/recipeActions';

const SingleRecipes = (props) => {
  const { recipe_id } = useParams();
  const { push } = useHistory();
  const { recipe } = props

  const deleteHandler = () => {
    props.deleteRecipe(recipe.recipe_id)
  }  

  const editHandler = () => {
    push(`/recipes/edit/${recipe.recipe_id}`)
  }

  return ( 
  <div>
    <h3>{recipe.recipe_name}</h3>
    <p>Category: {recipe.category}</p>
    <img src={recipe.recipe_img} alt={recipe.recipe_name}/>
    <p>ingredients: {recipe.ingredients}</p>
    <p>instructions: {recipe.instructions}</p>
    <p>source: {recipe.source}</p>
    <button onClick={() => editHandler()}>Edit</button>
    <button onClick={() => deleteHandler()}>Delete</button>
  </div>  
   )
};


export default connect(null, {deleteRecipe, editRecipe, getRecipeId})(SingleRecipes);
