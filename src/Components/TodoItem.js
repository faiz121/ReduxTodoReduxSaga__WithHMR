import React from 'react'

const TodoList = (props) => {
  const { todo, remove, todoId } = props;
  return (
      <tr>
        <td>{todo}</td>
        <td><button className="btn btn-danger btn-xs" onClick={() => {remove(todoId)}} >x</button></td>
      </tr>
  )
};

export default TodoList
