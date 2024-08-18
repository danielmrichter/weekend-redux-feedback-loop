import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const feeling = (state = ``, action) => {
  switch (action.type) {
    case "SET_FEELING":
      return action.payload;
  }
  return state;
};
const understanding = (state = ``, action) => {
  switch (action.type) {
    case "SET_UNDERSTANDING":
      return action.payload;
  }
  return state;
};
const support = (state = ``, action) => {
  switch (action.type) {
    case "SET_SUPPORT":
      return action.payload;
  }
  return state;
};
const comment = (state = "", action) => {
  switch (action.type) {
    case "SET_COMMENT":
      return action.payload;
  }
  return state;
};
const store = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comment,
  }),
  applyMiddleware(logger)
);

export default store;
