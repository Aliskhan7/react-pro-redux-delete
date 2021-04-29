export const loadtodos = () =>{
    return (dispatch) =>{
        dispatch({ type: 'start'})
        fetch('https://jsonplaceholder.typicode.com/post')
            .then(res => res.json())
            .then(json =>{
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}


export const removeTodo = (id) =>{
    return(dispatch) =>{
        fetch(`https://jsonplaceholder.typicode.com/post/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(json =>{
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}





















// export const loadTodos = () =>{
//     return (dispatch) => {
//         dispatch({type: 'start'})
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//             .then(json => {
//                 dispatch({
//                     type: "load",
//                     payload: json
//                 })
//             })
//         }
// }
//
// export const deleteTodos = (id) =>{
//     return (dispatch) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//             .then(json =>{
//                 dispatch({
//                     type: 'delete',
//                     payload: id
//                 })
//             })
//     }
// }