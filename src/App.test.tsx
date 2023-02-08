import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should render the Home Page clicked', async () => {
    // Arrange
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    await user.click(screen.getByText('Home'));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it('should render the About Page clicked', async () => {
    // Arrange
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    await user.click(screen.getByText('About'));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  it('should render the Store Page clicked', async () => {
    // Arrange
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    await user.click(screen.getByText('Store'));
    expect(screen.getByText(/store page/i)).toBeInTheDocument();
  });
});
