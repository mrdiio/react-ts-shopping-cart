import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { afterEach, it } from 'vitest';
import {
  ShoppingCartProvider,
  useShoppingCart,
} from '../../context/ShoppingCartContext';
import { StoreItem } from './StoreItem';

describe('StoreItem', () => {
  const item = {
    id: 1,
    name: 'Book',
    price: 12.99,
    imgUrl: '/images/book.jpg',
  };
  const user = userEvent.setup();

  it('click add to cart', async () => {
    // Arrange
    render(<StoreItem {...item} />, { wrapper: ShoppingCartProvider });

    // get quantity of item in cart

    expect(screen.getByText(/book/i)).toBeInTheDocument();

    // Act
    await user.click(screen.getByText('+ Add To Cart'));

    // Assert
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it('click increment cart', async () => {
    // Arrange
    render(<StoreItem {...item} />, { wrapper: ShoppingCartProvider });

    expect(screen.getByText(1)).toBeInTheDocument();

    await user.click(screen.getByText('+'));
    await user.click(screen.getByText('+'));
    expect(screen.getByText(3)).toBeInTheDocument();
  });

  it('click decrement cart', async () => {
    // Arrange
    render(<StoreItem {...item} />, { wrapper: ShoppingCartProvider });

    expect(screen.getByText(3)).toBeInTheDocument();

    await user.click(screen.getByText('-'));
    await user.click(screen.getByText('-'));
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it('click remove from cart', async () => {
    // Arrange
    render(<StoreItem {...item} />, { wrapper: ShoppingCartProvider });

    // Act
    await user.click(screen.getByText(/remove/i));

    // Assert
    expect(screen.getByText(/add/i)).toBeInTheDocument();
  });
});
