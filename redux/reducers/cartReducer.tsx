let defaultState: Object = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

let cartReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};
      newState.selectedItems = {
        items: [...state.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, ':right');
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
