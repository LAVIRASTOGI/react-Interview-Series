const initialState = {
  count: 10,
};

export const counterReducer = (state = initialState, action) => {
  //type payload
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
