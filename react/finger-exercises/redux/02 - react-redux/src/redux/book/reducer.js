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
      const bookSelected = state.bookSelected.slice();
      const targetIndex = bookSelected.findIndex(el => el.id === action.payload);

      bookSelected[targetIndex].quantity += 1;
      return { ...state, bookSelected };
    }
    case actions.REMOVE_ITEM: {
      const bookSelected = state.bookSelected.slice();
      const targetIndex = bookSelected.findIndex(el => el.id === action.payload);
      const itemsQuantity = bookSelected[targetIndex].quantity;

      if (itemsQuantity === 1) {
        bookSelected.splice(targetIndex, 1);
      } else {
        bookSelected[targetIndex].quantity -= 1;
      }

      return { ...state, bookSelected };
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
