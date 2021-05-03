import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, loadtodos, editTodo} from "./actions";
import Header from "./Header";

function App() {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    useEffect(() =>{
        dispatch(loadtodos())
    }, [])

    const handelClick = (id) =>{
        dispatch(removeTodo(id))
    }
    const editClick = (id, completed) =>{
        dispatch(editTodo(id, completed))
    }


    return (
        <div>
            <Header/>
            <div>
                {loading ? 'loading...' : ''}
            </div>
            {todos.map(item => {
                return(
                    <div className='todo'>
                        <div className="check">
                            <input type="checkbox"
                                   checked={item.completed}
                                   onChange={() => editClick(item.id, item.completed)}
                            />
                        </div>
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="actions">
                            <button onClick={() => handelClick(item.id)}>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    }

export default App;
