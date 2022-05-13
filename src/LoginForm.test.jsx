import renderer from 'react-test-renderer';
import { LoginForm } from './LoginForm';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without issue', () => {
  const component = renderer.create(<LoginForm />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('submit button is disabled if email and password is empty', () => {
  // Setup
  const component = render(<LoginForm />);

  const { getByText } = component;

  const loginElement = getByText(/Login/i).closest('button');

  // Assertions
  expect(loginElement).toBeDisabled();
});

it('submit button is disabled if email is full, but password is empty', () => {
  const { getByText, getByPlaceholderText } = render(<LoginForm />);

  const loginElement = getByText(/Login/i).closest('button');
  const emailInputElement = getByPlaceholderText(/Email/i);

  fireEvent.change(emailInputElement, { target: { value: 'abc123' }});

  expect(loginElement).toBeDisabled();
});

it('submit button is enabled if password is full but email is empty', () => {
  const { getByText, getByPlaceholderText } = render(<LoginForm />);

  const loginElement = getByText(/Login/i).closest('button');
  const passwordInputElement = getByPlaceholderText(/Password/i);

  fireEvent.change(passwordInputElement, { target: { value: 'abc123' }});

  expect(loginElement).toBeDisabled();
});

it('submit button is enabled if email and password are not empty', () => {
  const { getByText, getByPlaceholderText } = render(<LoginForm />);

  const loginElement = getByText(/Login/i).closest('button');
  const emailInputElement = getByPlaceholderText(/Email/i);
  const passwordInputElement = getByPlaceholderText(/Password/i);

  fireEvent.change(emailInputElement, { target: { value: 'abc123' }});
  fireEvent.change(passwordInputElement, { target: { value: 'abc123' }});

  expect(loginElement).toBeEnabled();
});

it('submit button attempts login when clicked', () => {
  const { getByText } = render(<LoginForm />);

  const loginElement = getByText(/Login/i).closest('button');

  fireEvent.click(loginElement);
});
