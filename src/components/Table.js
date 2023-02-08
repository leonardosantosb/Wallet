import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  removeButton = () => {
    const diminuiArr = -1;
    const { expenses } = this.props;
    const newArr = [...expenses];
    newArr.slice(0, diminuiArr);
    return newArr;
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.length > 0 && expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>
                {expense.description}
              </td>
              <td>
                {expense.tag}
              </td>
              <td>
                {expense.method}
              </td>
              <td>
                {Number(expense.value).toFixed(2)}
              </td>
              <td>
                {expense.exchangeRates[expense.currency].name}
              </td>
              <td>
                {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
              </td>
              <td>
                Real
              </td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ this.removeButton }
                >
                  Excluir

                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
