import React, { Component } from 'react';
import '../scss/todoFooter.scss';
import { connect } from 'react-redux';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { arr } = this.props;
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
    this.props.toggleStatus(status);
  };
  clearIsDone = () => {
    this.props.clearIsDone();
  };
}

export default connect(
  state => {
    return {
      arr: state.arr
    };
  },
  dispatch => {
    return {
      toggleStatus: status => {
        dispatch({ type: 'UPDATE_STATUS', status });
      },
      clearIsDone: () => {
        dispatch({ type: 'CLEAR_ISDONE' });
      }
    };
  }
)(TodoFooter);
