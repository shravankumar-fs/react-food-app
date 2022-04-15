import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Cart></Cart>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
