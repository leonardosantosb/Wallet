import { receiveMoedasSuccess, requestMoedas } from '../actions';

const INITIAL_STATE = {
  wallet: '',
  isFething: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case requestMoedas:
    return {
      ...state,
      isFething: true,
    };
  case receiveMoedasSuccess:
    return {
      ...state,
      wallet: action.payload.currencies,
      isFething: false,
    };
  default:
    return state;
  }
};

export default wallet;
