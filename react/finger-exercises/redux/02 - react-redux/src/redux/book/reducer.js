import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: action.payload, originalData: action.payload };
    case actions.ADD_TO_CART:
      return { ...state, bookSelected: state.bookSelected.concat(action.payload) };
    case actions.ADD_ITEM: {
      const { bookSelected } = state;
      const targetIndex = bookSelected.findIndex(el => el.id === action.payload);
      const newBookSelected = bookSelected.map((item, index) =>
        index === targetIndex ? { ...item, quantity: item.quantity + 1 } : item
      );

      return { ...state, bookSelected: newBookSelected };
    }
    case actions.REMOVE_ITEM: {
      const { bookSelected } = state;
      const targetIndex = bookSelected.findIndex(el => el.id === action.payload);

      const newBookSelected =
        bookSelected[targetIndex].quantity === 1
          ? bookSelected.filter((_, index) => index !== targetIndex)
          : bookSelected.map((item, index) =>
              index === targetIndex ? { ...item, quantity: item.quantity - 1 } : item
            );

      return { ...state, bookSelected: newBookSelected };
    }
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: state.originalData.filter(book => book.name.toLowerCase().includes(action.payload))
      };
    default:
      return state;
  }
}

export default reducer;
