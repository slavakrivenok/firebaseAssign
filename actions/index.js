import firebase from '../fb'

export function getJokes(){
    return(dispatch) => {
        firebase.database().ref('/Jokes').on('value', snapshot =>{
        dispatch({
            type: "Jokes_FETCH",
            payload: snapshot.val()
           
        })
        })
        
    }
}
export function postJokes(title, content){
    return (dispatch) => {
        firebase.database().ref('/Jokes').push({title, content})
    }
}