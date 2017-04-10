import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import '../public/style.css'
import axios from 'axios'
import store from './store'
import {Provider} from 'react-redux'
import Todo from './Todo'
import { getTodosdb } from './action'
import { BrowserRouter, Match } from 'react-router'

const App = React.createClass({
  componentDidMount () {
    store.dispatch(getTodosdb())
  },
  render () {
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
});

ReactDOM.render(<App />,
    document.getElementById('app')
);
