import { REQUEST_MOEDAS_SUCCESS, REQUEST_MOEDAS, SAVE_TASKS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFething: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MOEDAS:
    return {
      ...state,
      isFething: true,
    };
  case REQUEST_MOEDAS_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload),
      isFething: false,
    };
  case SAVE_TASKS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      isFething: false,
    };
  default:
    return state;
  }
};

export default wallet;
