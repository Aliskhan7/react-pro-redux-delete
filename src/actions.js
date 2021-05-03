export const loadtodos = () =>{
    return (dispatch) =>{
        dispatch({ type: 'start'})
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((json) =>{
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}


export const removeTodo = (id) =>{
    return(dispatch) =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() =>{
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}


export const editTodo = (id, completed) =>{
    return (dispatch) =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: !completed}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() =>{
                dispatch({
                    type: 'update',
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