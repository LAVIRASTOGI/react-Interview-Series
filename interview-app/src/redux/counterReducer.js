import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  //type and payload
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
