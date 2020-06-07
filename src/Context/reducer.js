import {Add,Remove} from './actio.type';

export default (state,action)=>{
           switch (action.type) {
               case Add:
                   return [action.payload];
                case Remove:
                    return [action.payload];
               
               default:
                return state;
           }
}