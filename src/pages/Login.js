import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    localUser: '',
    localPassword: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      localUser: target.value,
    });
  };

  handleChangepass = ({ target }) => {
    this.setState({
      localPassword: target.value,
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { localUser, localPassword } = this.state;
    dispatch(addUser(localUser, localPassword));
    history.push('/carteira');
  };

  disableButtonfunc = () => {
    const { localPassword, localUser } = this.state;
    const lengthinput = 6;
    const regexValidation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    const validation = regexValidation.test(localUser)
      && localPassword.length >= lengthinput;
    return !validation;
  };

  render() {
    return (
      <form>
        <input
          onChange={ this.handleChange }
          type="email"
          placeholder="E-mail"
          data-testid="email-input"
          required
        />
        <input
          onChange={ this.handleChangepass }
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          minLength="6"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ this.disableButtonfunc() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ email, password }) => ({
  localUser: email,
  LocalPassword: password,
});

export default connect(mapStateToProps)(Login);
