import React from 'react';
import {Provider} from 'react-redux';
import store from '../../Store'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import {Unwrapped as UnwrappedTodo } from './TodoList'
const todos = [
  {
    _id: '1',
    task: 'Do that',

  }
];
test('TodoList take a snapshot', () => {
  const component = shallow(<Provider store={store}><UnwrappedTodo
      deleteTodoDB={()=>{}}
      todos={todos} /></Provider>);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
