import React from 'react';
import ReactDOM from 'react-dom';
import Home from './AddTodo'
import '../../public/style.css'
import store from '../Store'
import {Provider} from 'react-redux'
import Todo from './TodoList/TodoList'
import { getTodosdb } from '../Action'
import { BrowserRouter, Match } from 'react-router'

class App extends React.Component {
  componentDidMount () {
    store.dispatch(getTodosdb())
  }
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                <Match exactly pattern='/' component={(props) => {
                    return (<div className="container">
                        <h1 className="text-center">To Do List</h1>
                        <Home/>
                        <Todo />
                    </div>)
                }} />
                <Match pattern='/contact' component={(props) => {
                 }
                } />
                </div>
            </BrowserRouter>
        </Provider>
    )
  }
};

ReactDOM.render(<App />,
    document.getElementById('app')
);
