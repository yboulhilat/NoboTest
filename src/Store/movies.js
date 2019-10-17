export default function (movies = [], action) {
    console.log("TCL: action", action)
    
    if (action.type === 'movies') {
        return action.movies ;
    }
    else {
        return movies;
    }
}