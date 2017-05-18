import { call, put, takeEvery } from 'redux-saga/effects' // these are saga effects we'll use
import axios from 'axios';
import { addTodo, removeTodo } from './Action'

export function* getTodos() {
  try {
    const response = yield call(axios.get, '/api/todos/');
    yield put(addTodo(response.data))
  } catch (e) {

  }
}

export function* postTodos(action) {
  try {
    const response = yield call(axios.post, '/api/todos/', {"task" : action.todo});
    yield put(addTodo(response.data))
  } catch (e) {

  }
}

export function* delTodo(action) {
  try {
    const response = yield call(axios.delete, `/api/todos/${action.id}`);
    yield put(removeTodo(action.id));
  } catch (e) {

  }
}
// rootSaga listens to every action_type(listed below) and assigns the worker sagas (getTodos, ...)
// with the tasks. When the worker sagas finish the api calls they dispatch actions using 'put'
// to update the store.
// In every catch we have to also have action types for failed/error case.

export default function *rootSaga() {
  yield takeEvery('GET_TODOS', getTodos);
  yield takeEvery('POST_TODO', postTodos);
  yield takeEvery('DELETE_TODO_DB', delTodo);
}
