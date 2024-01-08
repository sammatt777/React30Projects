import { combineReducers } from "redux";
export let Count = (state=0,aciton)=>{

    switch(aciton.type){
    
    case 'INC' : return state+1;
    case 'DEC' : return state-1;
    default : return state

    }
}


export let Name = (state='Sameer',action)=>{

switch(action.type){
    case 'NAMEE' : state = 'Changed';
    default : return state;
}

}

let Boolean = (state=true,action)=>{

    switch(action.type){
        case 'BOOLEAN' : return state == false;
        default : return state;
    }
}

let obj ={namee:'sameer',age:10}

let Arr =(state=obj,action)=>{
    console.log(state);
    switch(action.type){
        case 'CheckArray' : return state.obj.namee ='Name Changed'
        default : return state
    }
}

export let AllReducers = combineReducers({

    count:Count,
    name:Name,
    Boolean:Boolean,
    Arr:Arr,

});








