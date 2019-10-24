

export default function (state={}, action){
    switch(action.type){
        case "Jokes_FETCH":
            
            return {
                ...state, 
                JokesList:action.payload
            }

        default:
            return state
    }
}