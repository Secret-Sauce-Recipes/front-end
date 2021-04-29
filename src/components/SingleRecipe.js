import { useHistory, useParams } from "react-router";

const SingleRecipes = (props) => {
  const { recipe_id } = useParams();
  const { push } = useHistory();

  return <div>Hey</div>;
};

export default SingleRecipes;
