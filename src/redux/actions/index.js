import getMoedasApi from '../../services/reqApi';

export const ADD_USER = 'ADD_USER';
export const ADD_WALLET = 'ADD_WALLET';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const REQUEST_MOEDAS_SUCCESS = 'REQUEST_MOEDAS_SUCCESS';

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
  payload: {
    currencies,
  },
});

const fetchMoedas = async (dispatch) => {
  try {
    dispatch(requestMoedas());
    const moedas = await getMoedasApi();
    dispatch(receiveMoedasSuccess(moedas));
  } catch (error) {
    console.log(error);
  }
};

export const actionFetchMoedas = () => fetchMoedas;
