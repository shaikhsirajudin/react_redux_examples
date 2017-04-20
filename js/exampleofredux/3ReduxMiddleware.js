// how Middleware can use as a solution for asyn action in redux Pull an
// applyMiddleware from redux
import {applyMiddleware, createStore} from "redux";
// Reducer is a pure function that take state and action as an argument and by
// applying action it generate new state.
const reducer = function (state, action) {
  console.log("reducer");
  if (action.type == "INC") 
    state += action.payload;
  if (action.type == "DEC") 
    state -= action.payload;
  if (action.type == "E") 
    throw new Error("Unhandled type");
  return state;
}

//Logger function
const logger = (store) => (next) => (action) => {
  console.log("logger");
  //In middleware we can intercept the request or modify it. action.type = "DEC"
  console.log("logger logged the action before next", action);
  next(action);
  console.log("logger logged the action after next", action);
}

// Error function
const error = (store) => (next) => (action) => {
  console.log("error");
  try {
    console.log("error logged the action before next", action);
    next(action);
    console.log("error logged the action before after", action);
  } catch (e) {
    console.log("Error is catched", e);
  }
}

// Middleware function. Declare the middleware, if we want to add in
// functionality to middleware just pass the function as an argument.

const middleware = applyMiddleware(logger, error);

// Add middleware as a third parameter to store creation. Store with the one
// values of data.
const store = createStore(reducer, 1, middleware);

// the subcriber is used to get the final state of object.

store.subscribe(() => {
  console.log("Subscriber");
  console.log("The store is changed", store.getState());
});
console.log("start1");
store.dispatch({type: "INC", payload: 1});
console.log("complete1");
console.log("start2");
store.dispatch({type: "INC", payload: 2});
console.log("complete2");
console.log("start3");
store.dispatch({type: "DEC", payload: 2});
console.log("complete3");
console.log("start4");
store.dispatch({type: "E", payload: 2});
console.log("complete4");