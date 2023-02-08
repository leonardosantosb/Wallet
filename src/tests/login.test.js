import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('login test', () => {
  test('Pagina de login esta na rota / ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('existe o input email', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
  });
  test('existe o input password', () => {
    renderWithRouterAndRedux(<App />);
    const senha = screen.getByTestId('password-input');
    expect(senha).toBeInTheDocument();
  });
  test('existe um button com nome entrar', () => {
    renderWithRouterAndRedux(<App />);
    const botao = screen.getByRole('button', { name: 'Entrar' });
    expect(botao).toBeInTheDocument();
  });
  test('se é feito o login e muda a rota para /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByTestId('password-input');
    userEvent.type(senha, 'leo123');
    const button = screen.getByRole('button', { name: /Entrar/i });
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
