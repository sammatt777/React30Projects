import { combineReducers } from "redux";


import data from '../Data.jsx'

let initialState ={

    cartData:[],
}

export let addToCartReducer =(state={cartData:[]},action)=>{

    switch(action.type){
   
    case 'addtoCart' : return{
    ...state, cartData:[...state.cartData,action.detailsObj]
   }

   default : return state;
}

}



    
export let renderDataReducer =(state={renderData:[data]},action)=>{
    if(action.type=="renderData"){
        return state
    }
   return state


}


export let AllReducers = combineReducers({

    AddToCartReducer:addToCartReducer,
    RenderDataReducer:renderDataReducer

});
