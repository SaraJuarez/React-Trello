import React from 'react';
import List from './List';

function Board(props) {
  let lists = [];
  if (props.info.length != 0) {
    lists = props.info.board.list.map((list) => <List handleTitleList={props.handleTitleList} info={list} id={list.id} key={list.id} />);
  } else {
    console.log('no hay info');
  }

  const renderNewListButton = () => {
    return (
      <div>
        <button type='button' className='btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm' title='Añadir una nueva lista'>
          <span className='fas fa-plus'></span>
        </button>
      </div>
    );
  };
  return (
    <main className='app-board d-flex flex-nowrap'>
      {lists}
      {renderNewListButton()}
    </main>
  );
}

export default Board;
