import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas, savetasks } from '../redux/actions';
import getMoedasApi from '../services/reqApi';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoedas());
  }

  valueChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  descriptionChange = ({ target }) => {
    this.setState({
      description: target.value,
    });
  };

  currencyChange = ({ target }) => {
    this.setState({
      currency: target.value,
    });
  };

  methodChange = ({ target }) => {
    this.setState({
      method: target.value,
    });
  };

  tagChange = ({ target }) => {
    this.setState({
      tag: target.value,
    });
  };

  handleClick = async () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatch } = this.props;
    const cot = await getMoedasApi();
    dispatch(savetasks({ id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: cot }));
    this.setState((state) => ({
      id: state.id + 1,
      value: '',
      description: '',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="valueDespesa">
          Valor:
          <input
            data-testid="value-input"
            id="valueDespesa"
            type="text"
            value={ value }
            onChange={ this.valueChange }
          />
        </label>
        <label htmlFor="valueDescription">
          Descrição:
          <input
            data-testid="description-input"
            id="valueDescription"
            type="text"
            value={ description }
            onChange={ this.descriptionChange }
          />
        </label>
        <label htmlFor="valueMoeda">
          Moeda:
          <select
            data-testid="currency-input"
            id="valueMoeda"
            onChange={ this.currencyChange }
          >
            {currencies.map((currencie) => (
              <option key={ currencie }>
                { currencie }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de Pagamento:
          <select
            data-testid="method-input"
            id="metodo"
            onChange={ this.methodChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select
            data-testid="tag-input"
            id="categoria"
            onChange={ this.tagChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>
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
