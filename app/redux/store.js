import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  loggedIn: false
};

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      console.log("reducer running to change loggedin state to true")
      return {
        ...state,
        loggedIn: true
      };
    case actionTypes.LOGOUT:
        console.log("reducer running to change loggedin state to false")
        return {
          ...state,
          loggedIn: false
        };
    default:
      return state;
  }
};

// ACTIONS
export const runLogin = () => dispatch => {
  return dispatch({ type: actionTypes.LOGIN });
};

export const runLogout = () => dispatch => {
  return dispatch({ type: actionTypes.LOGOUT });
};

export const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
