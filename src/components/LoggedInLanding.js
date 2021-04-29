import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';
import { useState, useEffect } from 'react';
import { StyledH1, StyledH3, BgImgStyle } from '../style/component-styles';
import { useHistory } from 'react-router'
import SingleRecipe from './SingleRecipe'


const initialFormValues = {
  recipe_name: '',
  source: '',
  categories: '',
};

const LoggedInLanding = (props) => {
  const { getRecipes } = props;
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);


  const addHandler = (e) => {
    e.preventDefault();
    push('/recipes/add')
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newSearch = {
      recipe_name: formValues.recipe_name.trim(),
      source: formValues.source.trim(),
      categories: formValues.categories,
    };

    // setFormValues({ ...recipe, newRecipe });
    // props.LoggedInLanding(newSearch);
    //TODO a axios POST request to get the searched data based on filters
    setFormValues(initialFormValues);
    // push(`/recipes`)
    console.log('test')

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setSearch( { ...initialFormValues, [name]: value });
 

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

            <button id="searchBtn" submit={onSubmit}> Search </button>
           </div>
    </BgImgStyle>
    </form>

  {/* <div>{props.getRecipe}</div> */}

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
  </>
  );
  

  // return (
  // <div>
  //   <button onClick={addHandler}>Add Recipe</button>
  //   <div>
  //   {props.allRecipes.map(recipe => {
  //     return(
  //       <SingleRecipe key={recipe.recipe_id} recipe={recipe}/>
  //     )
  //   })}
  //   </div>
  // </div>
  // )
};

const mapStateToProps = (state) => {
  return {
    allRecipes: state.recipeReducer.allRecipes
  };
  
};

export default connect(mapStateToProps, { getRecipes })(LoggedInLanding);
