import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoedas());
  }

  render() {
    const { currencies } = this.props;
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
            {currencies.map((currencie) => (
              <option key={ currencie }>
                { currencie }
              </option>
            ))}
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
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
