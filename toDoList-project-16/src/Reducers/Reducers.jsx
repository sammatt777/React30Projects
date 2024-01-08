
let initialState = {
    ToDoArr: ['helo', 'how', 'you']
}


let submitValueReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'AddValues': return {
            ...state, ToDoArr: [...state.ToDoArr, action.payLoad]
        }



        case 'delete': return {
            ...state, ToDoArr: state.ToDoArr.filter((item, idx) => {
                return idx !== action.payLoad
            })
        }

        case 'edit': return {
            ...state, ToDoArr: state.ToDoArr.map((item, idx) => {
                if (idx == action.DeleteIndex) {
                    return action.payLoad
                }
                else {
                    return item
                }
            })
        }

case 'up': 

const upadtedArray = [...state.ToDoArr]
const currentIndex = upadtedArray[action.upIndex]
const nextIndex = upadtedArray[action.upIndex-1]

if(nextIndex){
    upadtedArray[action.upIndex] = nextIndex;
    upadtedArray[action.upIndex-1] = currentIndex;
    return{...state, ToDoArr: upadtedArray}
}


    case'down': 
    
    const upadtedArray1 = [...state.ToDoArr]

    const currentIndex1 = upadtedArray1[action.downIndex]
    const nextIndex1 = upadtedArray1[action.downIndex + 1]
    
    if(nextIndex1){
        upadtedArray1[action.downIndex] = nextIndex1;
        upadtedArray1[action.downIndex+1] = currentIndex1;
        
        return{...state, ToDoArr: upadtedArray1}
    }



        default: return state;
    }

}



export default submitValueReducer;