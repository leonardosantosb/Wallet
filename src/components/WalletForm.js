import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchMoedas } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchMoedas());
  }

  render() {
    const { wallet } = this.props;
    console.log({ wallet });
    return (
      <div>
        <label htmlFor="valueDespesa">
          Valor:
          <input data-testid="value-input" id="valueDespesa" type="text" />
        </label>
        <label htmlFor="valueDescription">
          Descrição:
          <input data-testid="description-input" id="valueDescription" type="text" />
        </label>
        <label htmlFor="valueMoeda">
          Moeda:
          <select data-testid="currency-input" id="valueMoeda">
            {/* {wallet.map((wall) => (
              console.log(wall)
              // <option key={ currencies.name }>{ currencies.code }</option>
            ))} */}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de Pagamento:
          <select data-testid="method-input" id="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select data-testid="tag-input" id="categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet.wallet,
});

export default connect(mapStateToProps)(WalletForm);
