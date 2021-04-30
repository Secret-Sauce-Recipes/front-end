import { useHistory } from "react-router";
import { connect } from "react-redux";
import {
  deleteRecipe,
  editRecipe,
  getRecipeId,
} from "../actions/recipeActions";
import {
  PageStyle,
  TextSpan,
  RecipeCard,
  RecipeImage,
  RecipeTextDiv,
  RecipeH2,
  RecipeH3,
  RecipeH4,
} from "../style/component-styles";

const SingleRecipes = (props) => {
  const { push } = useHistory();
  const { recipe } = props;

  const deleteHandler = () => {
    props.deleteRecipe(recipe.recipe_id);
  };

  const editHandler = () => {
    push(`/recipes/edit/${recipe.recipe_id}`);
  };

  return (
    <PageStyle>
      <p></p>
      <RecipeCard>
        <RecipeImage src={recipe.recipe_img} alt={recipe.recipe_name} />
        <RecipeTextDiv>
          <RecipeH2>{recipe.recipe_name}</RecipeH2>{" "}
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
          <RecipeH3>Category: {recipe.category}</RecipeH3>
          <RecipeH4>Ingredients:</RecipeH4>
          <TextSpan>{recipe.ingredients}</TextSpan>
          <RecipeH4>Instructions:</RecipeH4>
          <TextSpan>{recipe.instructions}</TextSpan>
          <RecipeH4>Source:</RecipeH4>
          <TextSpan>{recipe.source}</TextSpan>
        </RecipeTextDiv>
      </RecipeCard>
      {/* <div margin = "2rem">
  </div> */}
    </PageStyle>
  );
};

export default connect(null, { deleteRecipe, editRecipe, getRecipeId })(
  SingleRecipes
);
