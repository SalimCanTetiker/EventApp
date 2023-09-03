import React from 'react';

import Router from './Router'
import { FavoriteProvider } from './context/FavoriteContext/FavoriteContext'

const Wrapper = () => {
  return (
    <FavoriteProvider>
     <Router/>
    </FavoriteProvider>
  )
}

export default Wrapper