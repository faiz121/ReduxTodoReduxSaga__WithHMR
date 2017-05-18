import { createSelector } from 'reselect'

const allTodosSelector = state => state.todos;
const searchTermSelector = state => state.searchTerm;

const selectedTodos = (todos, searchTerm) => {
  return todos.filter(todo=> `${todo.task}`.indexOf(searchTerm) > -1);
};

export default createSelector(
    allTodosSelector,
    searchTermSelector,
    selectedTodos
)
