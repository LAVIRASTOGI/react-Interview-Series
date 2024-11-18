import { userService } from "../services/user";
import { DECREMENT, INCREMENT, LOGIN_USER } from "./actionType";

export const increment = (value) => {
  return { type: INCREMENT, payload: value };
};
export const decrement = () => {
  return { type: DECREMENT };
};

// later
export function loginUser() {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState) => {
    //api
    const data = await userService();
    dispatch({ type: LOGIN_USER, payload: data });
    // you can use api here
  };
}
