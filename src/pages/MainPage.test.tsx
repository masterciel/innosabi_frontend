import { render, screen, fireEvent } from '@testing-library/react';
import { MainPage } from './MainPage';

jest.mock('../service', () => ({
  fetchSuggestions: jest.fn(),
}));

describe('<MainPage />', () => {
  test('should render the keyword input and submit button', () => {
    render(<MainPage />);

    expect(screen.getByTestId('test-filter')).toBeInTheDocument();
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-keyword')).toBeInTheDocument();
  });
  test('should update filter state when filter input is changed', () => {
    render(<MainPage />);

    const filterInput = screen.getByTestId('test-filter');
    fireEvent.change(filterInput, { target: { value: 'technology' } });
    expect(filterInput).toHaveValue('technology');
  });

  test('should update keyword state when keyword input is changed', () => {
    render(<MainPage />);

    const keywordInput = screen.getByTestId('test-keyword');
    fireEvent.change(keywordInput, { target: { value: 'example' } });
    expect(keywordInput).toHaveValue('example');
  });
});
