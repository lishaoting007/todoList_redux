import { combineReducers } from 'redux';

function arr(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.item];
    case 'REDUCE_TODO':
      return state.filter((item, index) => index !== action.index);
    case 'TOGGLE_TODO':
      const newArr = [...state];
      newArr[action.index].isDone = !newArr[action.index].isDone;
      return newArr;
    case 'TOGGLE_EDIT':
      const newArr1 = [...state];
      newArr1[action.index].isEdit = !newArr1[action.index].isEdit;
      return newArr1;
    case 'CHANGE_TODO_TEXT':
      const newArr2 = [...state];
      newArr2[action.index].text = action.item;
      return newArr2;
    case 'CLEAR_ISDONE':
      const newArr3 = state.filter(item => !item.isDone);
      return newArr3;
    default:
      return state;
  }
}

function status(state = 1, action) {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return action.status;
    default:
      return state;
  }
}

export default combineReducers({
  arr,
  status
});
