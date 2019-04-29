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
          onBlur={e => this.changeTodoTextWhenBlur(e, index)}
          onChange={e => this.handleChange(e, index)}
          onKeyDown={e => this.handleEnter(e, index)}
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
    return new Promise(resolve => {
      this.props.doubleToggleEidt(index);
      resolve();
    }).then(() => {
      this.refs.input.focus();
    });
  };
  changeTodoTextWhenBlur = (e, index) => {
    const item = e.target.value;
    this.props.changeTodoText(item, index);
    this.props.doubleToggleEidt(index);
  };
  handleChange = (e, index) => {
    const item = e.target.value;
    this.props.changeTodoText(item, index);
  };
  handleEnter = (e, index) => {
    if (e.keyCode === 13) {
      const item = e.target.value;
      this.props.changeTodoText(item, index);
      this.props.doubleToggleEidt(index);
    }
  };
}

export default connect(
  state => {
    return {
      ...state
    };
  },
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
      changeTodoText: (item, index) => {
        dispatch({ type: 'CHANGE_TODO_TEXT', item, index });
      }
    };
  }
)(TodoItem);
