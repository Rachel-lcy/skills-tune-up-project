'use client';
import { useCart } from '../context/CartContext';

export default function ClearCartButton({ fullWidth = false, className = '' }) {
  const { cartCount, clearCart } = useCart();

  return (
    <button
      onClick={() => cartCount > 0 && clearCart()}
      disabled={cartCount === 0}
      className={[
        fullWidth ? 'w-full sm:w-auto' : '',
        'mt-3 bg-white/10 text-white/90 border border-white/30 hover:bg-white/20',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        'font-semibold py-2 px-4 rounded-lg transition',
        className,
      ].join(' ')}
      aria-disabled={cartCount === 0}
      aria-label="Clear cart"
      title={cartCount > 0 ? 'Clear cart' : 'Cart is empty'}
    >
      Clear Cart
    </button>
  );
}
