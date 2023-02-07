import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home page', () => {
  it('renders the Home page', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
