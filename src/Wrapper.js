import React from 'react';

import Router from './Router'
import { FavoriteProvider } from './context/FavoriteContext/FavoriteContext'
import { CartProvider } from './context/CartContext/CartContext';

const Wrapper = () => {
  return (
    <CartProvider>
    <FavoriteProvider>
     <Router/>
    </FavoriteProvider>
    </CartProvider>
  )
}

export default Wrapper