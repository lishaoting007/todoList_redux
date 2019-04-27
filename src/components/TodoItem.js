import React, { Component } from 'react';
import '../scss/todoItem.scss';
import store from '../store';
import { Promise } from 'q';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item, index } = this.props;
    return !item.isEdit ? (
      <li className="todoItem">
        <div className="itemWrap" onDoubleClick={this.doubleToggleEidt}>
          <span className={item.isDone ? 'done' : ''}>{item.text}</span>
        </div>
        <button onClick={() => this.toggleTodo(index)}>完成</button>
        <button onClick={() => this.reduceTodo(index)}>删除</button>
      </li>
    ) : (
      <li className="todoItem">
        <input
          type="text"
          ref="input"
          value={item.text}
          onBlur={this.changeTodoTextWhenBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      </li>
    );
  }
  toggleTodo = index => {
    store.dispatch({ type: 'TOGGLE_TODO', index });
  };
  reduceTodo = index => {
    store.dispatch({ type: 'REDUCE_TODO', index });
  };
  doubleToggleEidt = () => {
    new Promise(resolve => {
      store.dispatch({ type: 'TOGGLE_EDIT', index: this.props.index });
      resolve();
    }).then(() => {
      this.refs.input.focus();
    });
  };
  changeTodoTextWhenBlur = e => {
    const item = e.target.value;
    store.dispatch({ type: 'CHANGE_TODO_TEXT', item, index: this.props.index });
    this.doubleToggleEidt();
  };
  handleChange = e => {
    const item = e.target.value;
    store.dispatch({ type: 'CHANGE_TODO_TEXT', item, index: this.props.index });
  };
  handleEnter = e => {
    if (e.keyCode === 13) {
      const item = e.target.value;
      store.dispatch({
        type: 'CHANGE_TODO_TEXT',
        item,
        index: this.props.index
      });
      this.doubleToggleEidt();
    }
  };
}

export default TodoItem;
