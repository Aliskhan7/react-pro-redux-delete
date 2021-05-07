import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import "./style.css"

const initialState = {
    todos: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'start':
            return{
                ...state,
                loading: true
            }
        case 'load':
            return{
                ...state,
                todos: action.payload,
                loading: false
            }

        case 'start_checking':
            return{
                ...state,
                todos: state.todos.map(item =>{
                    if(item.id === action.payload){
                        return{
                            ...item,
                            checking: true
                        }
                    }
                    return item
                })
            }


        case 'update':
            return{
                ...state,
                todos: state.todos.map(item =>{
                    if(item.id === action.payload){
                        return{
                            ...item,
                            completed: !item.completed,
                            checking: false
                        }
                    }
                    return item;
                })
            }


        case 'start_deliting':
            return{
                ...state,
                todos: state.todos.map(item =>{
                    if(item.id === action.payload){
                        return {
                            ...item,
                            deliting: true
                        }
                    }
                    return item;
                })
            }

        case 'delete':
            return{
                ...state,
                todos: state.todos.filter(item =>{
                    if(item.id === action.payload){
                        return false;
                    }
                    return true;
                })
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <div className='container'>
            <App />
        </div>
    </Provider>,
  document.getElementById('root')
);

