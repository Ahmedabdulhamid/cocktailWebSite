import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import DetailsCocktails from './DetailsCocktails';
import SearchBox from './SearchBox'
const App = () => {
  
 
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detailsofcocktails/:id' element={<DetailsCocktails/>}/>
      <Route path='/searchbox/:character' element={<SearchBox/>}/>
    </Routes>
   
    </div>
  )
}

export default App

