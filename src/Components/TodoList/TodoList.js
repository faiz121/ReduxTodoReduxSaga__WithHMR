import React from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { deleteTodoDB } from '../../Action'
import todosSelector from '../../Selector/filterTodoSelector'

const Todo = (props) => {
    const { todos } = props;
    return (
        <table className="table table-xs">
          <thead className="thead-default">
          <tr>
            <th>To-do</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {todos.map(todo => {
                return (
                    <TodoItem key={todo._id} todo={todo.task} todoId={todo._id} remove={()=> {
                      props.deleteTodoDB(todo._id);
                     }
                    }
                />
                )
              })}
          </tbody>
        </table>
    )
};

const  mapStateToProps = (state) => {
  return {
    todos: todosSelector(state),
  };
};
export const Unwrapped = Todo;
export default connect(mapStateToProps, {deleteTodoDB})(Todo);
