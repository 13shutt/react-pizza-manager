export default function pizzaList(state = [], action) {
  switch(action.type) {
    case 'ADD_PIZZA': {
      return [
        ...state,
        action.payload
      ];
    }
    case 'REMOVE_PIZZA': {
      const arr = state.reverse()
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].title === action.payload) {
          const newArr = [
            ...arr.slice(0, i),
            ...arr.slice(i + 1, arr.length)
          ]
          return newArr.reverse()
        }
      }
    }
    default: return state;
  }
}