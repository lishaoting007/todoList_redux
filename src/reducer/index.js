export default function count(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'REDUCER':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
