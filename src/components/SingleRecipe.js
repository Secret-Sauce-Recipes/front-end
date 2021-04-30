import { useHistory, useParams } from "react-router";
import { connect } from 'react-redux';
import { deleteRecipe} from '../actions/recipeActions';
import {
  StyledH3,
  PageStyle,
  TextSpan,
  RecipeCard,
  RecipeImage,
  RecipeTextDiv
} from '../style/component-styles';

const SingleRecipes = (props) => {
  const { recipe_id } = useParams();
  const { push } = useHistory();
  const { recipe } = props

  const deleteHandler = () => {
    props.deleteRecipe(recipe.recipe_id)
  }

  

  return ( 
  
 <PageStyle>
  <RecipeCard>
    <RecipeImage src={recipe.recipe_img} alt={recipe.recipe_name} />
    <RecipeTextDiv>
      <h2>{recipe.recipe_name}</h2> 
      <h3>{recipe.category}</h3>
      <h4>Ingredients:</h4><TextSpan>{recipe.ingredients}</TextSpan>
      <h4>Instructions:</h4><TextSpan>{recipe.instructions}</TextSpan>
      <h4>Source:</h4><TextSpan>{recipe.source}</TextSpan>
    </RecipeTextDiv>
  </RecipeCard>
</PageStyle>

   )
};


export default connect(null, {deleteRecipe})(SingleRecipes);
