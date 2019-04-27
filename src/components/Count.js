import React, { Component } from 'react';
import store from '../store/index';

class Count extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{store.getState().count}</h1>
        <div>
          <button onClick={this.increment}>增加</button>
        </div>
        <div>
          <button onClick={this.reducer}>减少</button>
        </div>
      </div>
    );
  }
  increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };
  reducer = () => {
    store.dispatch({ type: 'REDUCER' });
  };
}

export default Count;
