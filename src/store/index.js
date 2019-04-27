import { createStore } from 'redux';
import reducer from '../reducer/todolist';

const store = createStore(reducer);

export default store;
