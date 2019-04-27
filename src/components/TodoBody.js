import React, { Component } from 'react';
import '../css/TodoBody.css';

class TodoBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Body">
        <li className="li">{}</li>
        <button>删除</button>
      </div>
    );
  }
}

export default TodoBody;
