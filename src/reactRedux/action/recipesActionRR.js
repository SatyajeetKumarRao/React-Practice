import axios from "axios";
import { recipesConstant } from "../constant/recipesConstantRR";
import { toast } from "react-toastify";

const getRecipes =
  ({ value }) =>
  async (dispatch) => {
    try {
      dispatch(getRecipesLoading(true));
      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${value}`,
      );

      console.log(response.data);
      dispatch(getRecipesSuccess(response.data));
    } catch (error) {
      dispatch(getRecipesError(true));
      console.log(error);
      toast(error.message);
    }
  };

const getRecipesLoading = (value) => {
  return {
    type: recipesConstant.GET_RECIPES.LOADING,
    payload: value,
  };
};

const getRecipesError = (value) => {
  return {
    type: recipesConstant.GET_RECIPES.ERROR,
    payload: value,
  };
};

const getRecipesSuccess = (data) => {
  return {
    type: recipesConstant.GET_RECIPES.SUCCESS,
    payload: data,
  };
};

export { getRecipes };
