const initialState = {
  searchTerm: '',
  todos: []
};

const setSearchTerm = (state, action) => {
  return {...state, searchTerm: action.searchTerm}
};

const addTodos = (state, action) => {
  return {...state, todos: state.todos.concat(action.todo)}
};

const removeTodo = (state, action) => {
  return {...state, todos: state.todos.filter((todo) => todo._id !== action.id)}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return setSearchTerm(state, action);
    case 'ADD_TODO':
      return addTodos(state, action);
    case 'REMOVE_TODO':
      return removeTodo(state, action);
    default:
      return state
  }
}

export default reducer;
