import {createStore} from "redux";
const reducer = function(state, action){

if (action.type=="INC")
  state +=action.payload;
if (action.type=="DEC")
  state -=action.payload;

return state;
}
// Store with the one values of data.
const store =createStore(reducer,0);

store.subscribe(()=>{
  console.log("store changed",store.getState())
});

store.dispatch({type:"INC",payload:1  });
store.dispatch({type:"INC",payload:2 });
store.dispatch({type:"DEC",payload:2});