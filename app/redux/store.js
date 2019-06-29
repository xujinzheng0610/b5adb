import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  selectedKey: "project"
};

export const actionTypes = {
  MENUKEY: "MENUKEY",
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENUKEY:
      return {
        ...state,
        selectedKey: action.key
      };
    default:
      return state;
  }
};

// ACTIONS
export const updateMenuKey = (key) => dispatch => {
  return dispatch({ type: actionTypes.MENUKEY, key: key});
};

export const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
