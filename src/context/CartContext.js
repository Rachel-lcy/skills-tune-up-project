'use client';
import { createContext, useContext, useEffect, useMemo, useCallback, useState } from 'react';

const STORAGE_KEY = 'cartCount';

function readCountFromStorage() {
  try {
    if (typeof window === 'undefined') return 0;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const n = parseInt(raw ?? '0', 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

const CartContext = createContext({
  cartCount: 0,
  addToCart: (_qty = 1) => {},
  clearCart: () => {},
});

export function CartProvider({ children }) {
  // Initialize from localStorage so the badge persists across refreshes
  const [cartCount, setCartCount] = useState(readCountFromStorage);

  // Keep localStorage in sync
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(cartCount));
    } catch {}
  }, [cartCount]);

  // Sync across tabs/windows
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue != null) {
        const n = parseInt(e.newValue, 10);
        if (Number.isFinite(n)) setCartCount(n);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const addToCart = useCallback((qty = 1) => {
    setCartCount((c) => Math.max(0, c + qty));
  }, []);

  const clearCart = useCallback(() => setCartCount(0), []);

  const value = useMemo(() => ({ cartCount, addToCart, clearCart }), [cartCount, addToCart, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
