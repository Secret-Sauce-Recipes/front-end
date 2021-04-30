import { useHistory, useParams } from "react-router";
import { connect } from 'react-redux';
import { deleteRecipe, editRecipe, getRecipeId } from '../actions/recipeActions';
import {
  // StyledH3,
  PageStyle,
  TextSpan,
  RecipeCard,
  RecipeImage,
  RecipeTextDiv,
  RecipeH2,
  RecipeH3,
  RecipeH4
} from '../style/component-styles';

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
  
 <PageStyle>
  <RecipeCard>
    <RecipeImage src={recipe.recipe_img} alt={recipe.recipe_name} />
    <RecipeTextDiv>
      <RecipeH2>{recipe.recipe_name}</RecipeH2> <button>Edit</button>
      <RecipeH3>{recipe.category}</RecipeH3>
      <RecipeH4>Ingredients:</RecipeH4><TextSpan>{recipe.ingredients}</TextSpan>
      <RecipeH4>Instructions:</RecipeH4><TextSpan>{recipe.instructions}</TextSpan>
      <RecipeH4>Source:</RecipeH4><TextSpan>{recipe.source}</TextSpan>
    </RecipeTextDiv>
  </RecipeCard>
</PageStyle>

   )
};


export default connect(null, {deleteRecipe, editRecipe, getRecipeId})(SingleRecipes);
