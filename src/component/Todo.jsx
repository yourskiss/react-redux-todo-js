import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div style={{'borderBottom':'solid 1px #f30','width':'100%','float':'left'}}>
      <p style={{'float':'left','width':'70%','textAlign':'left'}}>
        {todo.text}
      </p>
      <button style={{'float':'right','width':'27%','textAlign':'left'}} onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default Todo;
