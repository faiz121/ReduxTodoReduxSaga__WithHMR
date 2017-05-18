import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm, postTodo } from '../Action'

const AddTodo = (props) => {
    let input;
    return (
        <div className="text-center">
          <input ref={(node) => input = node } type="text" name="todo" placeholder='add a todo ...'/>
          <button className="btn btn-primary btn-sm" onClick={() => {
            props.postTodo(input.value);
            input.value = '';
          }} type="submit">add
          </button>
          <div>
            <input type="text"
                   onChange={(e) => {
                     props.setSearchTerm(e.target.value)
                   }}
                   value={props.searchTerm}
                    placeholder='search ...'/>
          </div>
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
};

export default connect(mapStateToProps, {setSearchTerm, postTodo})(AddTodo)
