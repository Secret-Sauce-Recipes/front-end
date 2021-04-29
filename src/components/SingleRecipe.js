import { useHistory, useParams } from "react-router";

const SingleRecipes = (props) => {
  const { recipe_id } = useParams();
  const { push } = useHistory();
  const { recipe } = props

  return ( 
  <div>
    <h3>{recipe.recipe_name}</h3>
    <p>Category: {recipe.category}</p>
    <img src={recipe.recipe_img} alt={recipe.recipe_name}/>
    <p>ingredients: {recipe.ingredients}</p>
    <p>instructions: {recipe.instructions}</p>
    <p>source: {recipe.source}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>  
   )
};

export default SingleRecipes;
