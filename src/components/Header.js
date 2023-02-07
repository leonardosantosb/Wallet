import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalValue = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((element) => {
      const { value, exchangeRates, currency } = element;
      const cotacao = exchangeRates[currency].ask;
      const cotBrl = cotacao * value;
      total += cotBrl;
    });
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.totalValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
