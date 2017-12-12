var tmpArr = Array(12);
for (let i = 0; i < 12; i++) {
  tmpArr[i] = Array(12).fill(null);
}
var defaultState = [{
  squares: tmpArr,
  location: null,
}]

const history = (state = defaultState, action) => {
  switch (action.type) {
    case 'CLICK_SQUARE':
      return action.history.slice(0);
    default:
      return state
  }
}

export default history
