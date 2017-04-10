import React from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { deleteTodoDB } from './action'

const Todo  = React.createClass({
  removeTodo (id) {
      this.props.dispatchRemoveTodo(id);
  },
  render: function () {
    const { todos, searchTerm } = this.props;
    return (
        <table className="table table-xs">
          <thead className="thead-default">
          <tr>
            <th>To-do</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {todos
              .filter((todo)=> {
                return `${todo.task}`.indexOf(searchTerm) > -1;
              })
              .map((todo) => {
                return (
                    <TodoList key={todo._id} todo={todo.task} todoId={todo._id} remove={this.removeTodo}/>
                )
              })}
          </tbody>
        </table>
    )
  }
});


function mapStateToProps(state) {
  return {
    todos: state.todos,
    searchTerm: state.searchTerm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRemoveTodo(id) {
      dispatch(deleteTodoDB(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
