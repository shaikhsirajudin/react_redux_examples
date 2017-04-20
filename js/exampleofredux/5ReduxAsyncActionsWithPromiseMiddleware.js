//redux-promise-middleware provides default dispatches 

import {applyMiddleware, createStore} from "redux";
// to get the log of current state import {createLogger} from "redux-logger"; or
// you can use like below
import logger from "redux-logger";
//thunk middleware allow the functionality for async call;
import thunk from "redux-thunk";
//Ajax call for restful API
import axios from "axios";
// this will help to get different stages for restful api, we can remore the thunk or we can use the both.
import promise from "redux-promise-middleware";

// Initialize the initial state.

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_START":
      {
        return {
          ...state,
          fetching: true
        }
       
      }
    case "RECEIVE_USERS":
      {
        return {
          ...state,
          fetched: true,
          fetching: false,
          users: action.payload
        }
       
      }
    case "FETCH_USERS_ERROR":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }       
      }
  }
  return state;
}
//const middleware = applyMiddleware(thunk, createLogger())
const middleware = applyMiddleware(promise(),thunk, logger)
// take out the constant.
const store = createStore(reducer, middleware);
// Now dispatch a function that receive one that is dispatcher.
store.dispatch({type:"FETCH_USERS",payload:axios
    .get("http://rest.learncode.academy/api/wstern/users")});
/*
store.dispatch((dispatch) => {

  dispatch({type: "FETCH_USERS_START"});
  // do something async then call dispatch again
  axios
    .get("http://rest.learncode.academy/api/wstern/users")
    .then((respnse) => {
      dispatch({type: "RECEIVE_USERS", payload: respnse});
    })
    .catch((error) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: respnse});
    }); 
});*/
