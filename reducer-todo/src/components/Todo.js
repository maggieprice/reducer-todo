// import {todoReducer, initialState} from '../reducers/todoReducer';
import React, { useState, useReducer } from 'react';

const Todo = props => {
  // const [state=initialState, dispatch] = useReducer(todoReducer, initialState);
return (
  <div>
  {props.state.map(item => {
    return (
  <div className={item.completed ? 'completed' : ''}
   onClick={()=>props.dispatch(item.id)}key={item.id}>
  <h3>{item.item}</h3>
    </div> ) }
  )} 
  </div>
  )
}

export default Todo;