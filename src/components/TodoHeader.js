import React, { Component } from 'react';
import '../css/TodoHeader.css';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <input type="text" />
      </div>
    );
  }
}

export default TodoHeader;
