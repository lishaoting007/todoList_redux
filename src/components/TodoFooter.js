import React, { Component } from 'react';
import '../scss/todoFooter.scss';
import store from '../store';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { arr } = store.getState();
    const newArr = arr.filter(item => !item.isDone);
    return (
      <div className="Footer">
        <span className="left">{newArr.length}个Todo</span>
        <div className="middle">
          <button onClick={() => this.toggleStatus(1)}>全部</button>
          <button onClick={() => this.toggleStatus(2)}>未完成</button>
          <button onClick={() => this.toggleStatus(3)}>已完成</button>
        </div>
        <button className="right" onClick={this.clearIsDone}>
          清除已完成
        </button>
      </div>
    );
  }
  toggleStatus = status => {
    store.dispatch({ type: 'UPDATE_STATUS', status });
  };
  clearIsDone = () => {
    store.dispatch({ type: 'CLEAR_ISDONE' });
  };
}

export default TodoFooter;
