import getMoedasApi from '../../services/reqApi';

export const ADD_USER = 'ADD_USER';
export const ADD_WALLET = 'ADD_WALLET';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const REQUEST_MOEDAS_SUCCESS = 'REQUEST_MOEDAS_SUCCESS';
export const SAVE_TASKS = 'SAVE_TASKS';
export const BUTTON_REMOVE = 'BUTTON_REMOVE';

export const addUser = (email, password) => ({
  type: ADD_USER,
  payload: {
    email,
    password,
  },
});

export const addWallet = (payload) => ({
  type: ADD_WALLET,
  payload,
});

export const requestMoedas = () => ({
  type: REQUEST_MOEDAS,
});

export const receiveMoedasSuccess = (currencies) => ({
  type: REQUEST_MOEDAS_SUCCESS,
  payload:
    currencies,
});

export const fetchMoedas = () => async (dispatch) => {
  try {
    dispatch(requestMoedas());
    const moedas = await getMoedasApi();
    dispatch(receiveMoedasSuccess(moedas));
  } catch (error) {
    console.log(error);
  }
};

export const savetasks = (tasks) => ({
  type: SAVE_TASKS,
  payload:
    tasks,
});

export const removeExpense = (payload) => ({
  type: BUTTON_REMOVE,
  payload,
});
