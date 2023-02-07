import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About page', () => {
  it('renders the About page', () => {
    render(<About />);
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
