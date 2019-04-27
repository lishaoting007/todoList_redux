import React, { Component } from 'react';
import '../scss/todoHeader.scss';
import store from '../store/index';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <input type="text" onKeyDown={this.handleEnter} />
      </div>
    );
  }
  handleEnter = e => {
    if (e.keyCode === 13) {
      const item = {
        text: e.target.value,
        isDone: false,
        isEdit: false
      };
      store.dispatch({ type: 'ADD_TODO', item });
      e.target.value = '';
    }
  };
}

export default TodoHeader;
