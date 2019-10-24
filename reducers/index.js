import {combineReducers} from 'redux';

import JokeReducer from './JokeReducer';



const rootReducer = combineReducers({
     JokesList:JokeReducer
    

})

export default rootReducer;