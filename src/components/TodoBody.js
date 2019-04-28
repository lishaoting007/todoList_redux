import React, { Component } from 'react';
import '../scss/todoBody.scss';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import { connect } from 'react-redux';

class TodoBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const stateStatus = this.props.status;
    return (
      <div className="TodoBody">
        <TodoHeader />
        <ul>
          {this.props.arr.map((item, index) => {
            if (stateStatus === 1) {
              return <TodoItem item={item} index={index} key={index} />;
            } else if (stateStatus === 2) {
              return !item.isDone ? (
                <TodoItem item={item} index={index} key={index} />
              ) : null;
            } else if (stateStatus === 3) {
              return item.isDone ? (
                <TodoItem item={item} index={index} key={index} />
              ) : null;
            } else {
              return null;
            }
          })}
        </ul>
        <TodoFooter />
      </div>
    );
  }
}

export default connect(state => {
  return { ...state };
})(TodoBody);
