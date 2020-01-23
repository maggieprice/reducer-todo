import {todoReducer, initialState} from '../reducers/todoReducer';
import React, { useState, useReducer } from 'react';
import Todo from './Todo';


const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: "ADD_TODO", payload: newTodoText })
    }
    const handleCompleted = (id) => {
      dispatch({ type: "TOGGLE_COMPLETED", payload: id})
    }
    const handleCleared = (id) => {
      dispatch({ type: "CLEAR_COMPLETED"})
    }
    const handleChanges = e => {
      setNewTodoText(e.target.value);
    };
    return (
        <div className="todo-list">
         <Todo state={state} dispatch={handleCompleted}/>
          <input
          type="text"
          value={state.newTodoText}
          onChange={handleChanges}
          placeholder="Add new todo"
          />
          <button
          onClick={handleSubmit}>
          Add todo
          </button>
          <button
          onClick={handleCleared}>
          Clear Item
          </button>
        </div>  
        
    )
};

export default TodoList;