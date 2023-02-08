import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Store } from './Store';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext';

describe('Store', () => {
  it('should render the Store Page', async () => {
    // Arrange
    render(<Store />, { wrapper: ShoppingCartProvider });
    // Act
    // Assert
    expect(screen.getByText(/store page/i)).toBeInTheDocument();
  });
});
