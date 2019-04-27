import React, { Component } from 'react';
import '../css/TodoFooter.css';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <span className="left">{}个Todo</span>
        <div className="middle">
          <button>全部</button>
          <button>未完成</button>
          <button>已完成</button>
        </div>
        <button className="right">清除已完成</button>
      </div>
    );
  }
}

export default TodoFooter;
