import { ADD_TO_CART } from '../Constants'

const initialState = {
    cardData : []
}

export default function cardItem(state = [],action){
    // console.log('action.type', action.type);
    switch(action.type){
        case ADD_TO_CART:
            console.log('reducer', action);
            return [...state,
                {cardData:action.data}]
        break;
            default : 
            return state
    }
}