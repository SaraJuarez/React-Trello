import React, { useState } from 'react';
import '../src/scss/main.scss';
import Header from './components/Header.js';
import board from './services/board.json';
import Board from './components/Board.js';
// import Menu from './components/Menu.js';
// import Edit from './components/Edit';

// console.log(board)
let infoArray = new Array();

function App() {
  const [data, setData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textFilter, setTextFilter] = useState('');

  const toggleMenu = (ev) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilter = (textFilter) => {
    setTextFilter(textFilter);
  };

  return (
    <div className='app'>
      <Header toggleMenu={toggleMenu} textFilter={textFilter} handleFilter={handleFilter} />
      <Board />

      {/* <Menu />
      <Edit /> */}
    </div>
  );
}

export default App;
