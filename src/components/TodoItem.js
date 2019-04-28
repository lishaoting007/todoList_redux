import React, { Component } from 'react';
import '../scss/todoItem.scss';
import { connect } from 'react-redux';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item, index } = this.props;
    return !item.isEdit ? (
      <li className="todoItem">
        <div
          className="itemWrap"
          onDoubleClick={() => this.doubleToggleEidt(index)}
        >
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
    this.props.toggleTodo(index);
  };
  reduceTodo = index => {
    this.props.reduceTodo(index);
  };
  doubleToggleEidt = index => {
    const _this = this;
    new Promise(resolve => {
      _this.props.doubleToggleEidt(index);
      resolve();
    });
  };
  changeTodoTextWhenBlur = e => {
    const item = e.target.value;
    this.props.changeTodoText(item);
    this.doubleToggleEidt();
  };
  handleChange = e => {
    const item = e.target.value;
    this.props.changeTodoText(item);
  };
  handleEnter = e => {
    if (e.keyCode === 13) {
      const item = e.target.value;
      this.props.changeTodoText(item);
      this.doubleToggleEidt();
    }
  };
}

export default connect(
  null,
  dispatch => {
    return {
      toggleTodo: index => {
        dispatch({ type: 'TOGGLE_TODO', index });
      },
      reduceTodo: index => {
        dispatch({ type: 'REDUCE_TODO', index });
      },
      doubleToggleEidt: index => {
        dispatch({ type: 'TOGGLE_EDIT', index });
      },
      changeTodoText: item => {
        dispatch({ type: 'CHANGE_TODO_TEXT', item, index: this.props.index });
      }
    };
  }
)(TodoItem);
