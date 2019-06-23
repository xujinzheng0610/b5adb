import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  loggedIn: false
};

export const actionTypes = {
  ADD: "ADD",
  TICK: "TICK",
  LOGIN: "LOGIN"
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000
  );
};

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD });
};

export const runLogin = () => dispatch => {
  return dispatch({ type: actionTypes.LOGIN });
};

export const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
