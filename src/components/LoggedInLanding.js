import { useEffect } from "react";
import {
  StyledH1,
  Btn,
  StyledDd2,
  StyledDiv,
  StyledBtn2,
  ButtonDiv,
  StyledDiv2,
  StyledInput,
  BgImgStyle,
} from "../style/component-styles";
import { useHistory } from "react-router";
import SingleRecipe from "./SingleRecipe";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeActions";

// const initialFormValues = {
//   recipe_name: "",
//   source: "",
//   categories: "",
// };

const LoggedInLanding = (props) => {
  const { getRecipes } = props;
  const { push } = useHistory();

  // const [formValues, setFormValues] = useState(initialFormValues);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const addHandler = (e) => {
    e.preventDefault();
    push("/recipes/add");
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    // const newSearch = {
    //   recipe_name: formValues.recipe_name.trim(),
    //   source: formValues.source.trim(),
    //   categories: formValues.categories,
    // };
  };

  return (
    <div>
      <form className="landingForm">
        <StyledDiv2>
          <StyledH1>Secret Sauce Recipes</StyledH1>
          <StyledBtn2 onClick={addHandler}>Add New Recipe ?</StyledBtn2>
        </StyledDiv2>
        <BgImgStyle>
          <StyledDiv>
            <StyledInput
              placeholder="Search by source name"
              name="source"
              type="text"
            />
            <StyledInput
              placeholder="Search by recipe name"
              name="recipe_name"
              type="text"
            />
            <StyledDd2 name="categories" id="categories">
              <option value="choice">Search by a Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="brunch">Brunch</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="dinner">Dinner</option>
            </StyledDd2>
            <ButtonDiv>
              <Btn id="searchBtn" submit={onSubmit}>
                {" "}
                Search Recipe{" "}
              </Btn>
            </ButtonDiv>
          </StyledDiv>
        </BgImgStyle>
      </form>
      <div>
        <div>
          {props.allRecipes.map((recipe) => {
            return <SingleRecipe key={recipe.recipe_id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allRecipes: state.recipeReducer.allRecipes,
  };
};

export default connect(mapStateToProps, { getRecipes })(LoggedInLanding);
