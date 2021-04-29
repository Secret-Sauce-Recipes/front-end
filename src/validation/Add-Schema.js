// yup schema for the login
import * as yup from 'yup';

export default yup.object().shape({
  recipe_name: yup
    .string()
    .required('Recipe name is required')
    .min(6, 'Recipe name must be at least 6 characters long'),
  source: yup.string(),
  recipe_img: yup.string(),
  categories: yup
    .string()
    .oneOf(
      ['breakfast', 'brunch', 'lunch', 'snack', 'dinner'],
      'Category is required, please select a Category'
    ),
  ingredients: yup.string().required('Recipe ingredients are required'),
  instructions: yup.string().required('Recipe instructions are required'),
});
