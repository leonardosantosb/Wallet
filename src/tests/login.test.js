import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';

const emailinput = 'email-input';
const passInput = 'password-input';

describe('login test', () => {
  test('Pagina de login esta na rota / ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('existe o input email', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId(emailinput);
    expect(email).toBeInTheDocument();
  });
  test('existe o input password', () => {
    renderWithRouterAndRedux(<App />);
    const senha = screen.getByTestId(passInput);
    expect(senha).toBeInTheDocument();
  });
  test('existe um button com nome entrar', () => {
    renderWithRouterAndRedux(<App />);
    const botao = screen.getByRole('button', { name: 'Entrar' });
    expect(botao).toBeInTheDocument();
  });
  test('se é feito o login e muda a rota para /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId(emailinput);
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByTestId(passInput);
    userEvent.type(senha, 'leo123');
    const button = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
describe('wallet test', () => {
  test('se mostra o email na tela', () => {
    renderWithRouterAndRedux(<Wallet />);
    const emailRender = screen.getByTestId('email-field');
    expect(emailRender).toBeInTheDocument();
  });
  test('se tem um campo para despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const valor = screen.getByLabelText('Valor:');
    expect(valor).toBeInTheDocument();
    userEvent.type(valor, '10');
    expect(valor.value).toBe('10');
  });
  test('se tem um campo para descrição', () => {
    renderWithRouterAndRedux(<Wallet />);
    const descriçao = screen.getByLabelText('Descrição:');
    expect(descriçao).toBeInTheDocument();
    userEvent.type(descriçao, 'teste');
    expect(descriçao.value).toBe('teste');
  });
  test('se tem um campo para Moeda', () => {
    renderWithRouterAndRedux(<Wallet />);
    const Moeda = screen.getByLabelText('Moeda:');
    expect(Moeda).toBeInTheDocument();
  });
  test('se tem um campo para Método de Pagamento', () => {
    renderWithRouterAndRedux(<Wallet />);
    const metodo = screen.getByLabelText('Método de Pagamento:');
    expect(metodo).toBeInTheDocument();
  });
  test('se tem um campo para Categoria:', () => {
    renderWithRouterAndRedux(<Wallet />);
    const categoria = screen.getByLabelText('Categoria:');
    expect(categoria).toBeInTheDocument();
  });
});
