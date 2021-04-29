import { connect } from 'react-redux';
import { getRecipe } from '../actions/recipeActions';
import { useEffect } from 'react';
import { StyledH1, StyledH3, BgImgStyle } from '../style/component-styles';

const LoggedInLanding = (props) => {
  const { getRecipe } = props;

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);



 

  return (
   <>
    <form className="landingForm">

          <div>
          <StyledH1>Secret Sauce Recipes</StyledH1>
          </div>
        <BgImgStyle>
  
            <div>
             {/* style={{ backgroundImage: `url("https://images.megapixl.com/6683/66838674.jpg")` , backgroundSize:"cover"}}> */}
             
            <select
              name="categories"
              id="categories">
              <option value="choice">serach by a Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="dinner">Dinner</option>
            </select>
        
        <input
              // value={recipe.recipe_name}
              // onChange={onChange}
              placeholder="Search by source name"
              name="source"
              type="text"
            />
       <input
             // value={recipe.recipe_name}
             // onChange={onChange}
             placeholder="Search by recipe name"
             name="recipe_name"
             type="text"
            />
           </div>
    </BgImgStyle>
    </form>

  <div>{props.getRecipe}</div>
  </>
  );
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
