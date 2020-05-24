import React, { useState, useEffect } from 'react';
import '../src/scss/main.scss';
import Header from './components/Header.js';
import Board from './components/Board.js';
import Menu from './components/Menu.js';
import Edit from './components/Edit';
import api from './services/api.js';

function App() {
  const [info, setInfo] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setInfo(data);
    });
  }, []);

  const toggleMenu = (ev) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilter = (textFilter) => {
    setTextFilter(textFilter);
  };

  const handleTitleList = (ev) => {
    console.log(ev.currentTarget);
  };

  return (
    <div className='app'>
      <Header toggleMenu={toggleMenu} textFilter={textFilter} handleFilter={handleFilter} />
      <Board handleTitleList={handleTitleList} info={info} />
      <Menu isMenuOpen={isMenuOpen} />
      <Edit />
    </div>
  );
}

export default App;
