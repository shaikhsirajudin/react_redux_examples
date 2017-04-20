import {combineReducers, createStore} from "redux";
const userTypes = {
  CHANGE_NAME: "CHANGE_NAME",
  CHANGE_AGE: "CHANGE_AGE"
}
// state initialization in  the reducer method; const userReducer =  (state,
// action)
const userReducer = (state = {}, action) => {
  const newState = {
    state
  }
  switch (action.type) {
    case userTypes.CHANGE_NAME:{
     // state = Object.assign({},state, {name : action.payload});
      state ={...state, name : action.payload};
      break;
    }

    case userTypes.CHANGE_AGE:
      state = Object.assign({},state, {age : action.payload});
      break;
  }

  return state;
}
const tweetsReducer = (state = [], action) => {
  return state;
}
const reducer = combineReducers({user: userReducer, tweets: tweetsReducer});
// You can initialize state in the create store method with second parameter or
// in the reducer method; const store = createStore(reducer, 0);
const store = createStore(reducer);

store.subscribe(() => {
  console.log("store changed", store.getState())
});
store.dispatch({type: userTypes.CHANGE_NAME, payload: "VAMSI"});
store.dispatch({type: userTypes.CHANGE_AGE, payload: 40});
store.dispatch({type: userTypes.CHANGE_AGE, payload:42 });