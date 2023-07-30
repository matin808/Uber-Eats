interface DefaultStateProps {
  selectedItems: {
    items: Object[];
    restaurantName: string;
    checkboxValue?: boolean;
  };
}

let defaultState: DefaultStateProps = {
  selectedItems: {
    items: [],
    restaurantName: '',
    checkboxValue: false,
  },
};

let cartReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};
      if (action.payload.checkboxValue) {
        console.log('Add to cart ');

        newState.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log('remove from cart ');
        console.log('cart', newState.selectedItems.items);
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item: any) => item.id !== action.payload.id,
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, ':right');
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
