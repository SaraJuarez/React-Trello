import React from 'react';
import Card from './Card';
function List(props) {
  console.log(props);

  const handleTitleList = (ev) => {
    props.handleTitleList();
  };

  const handleDeleteBtn = () => {};
  const handleLeftBtn = () => {};
  const handleRightBtn = () => {};
  const handleAddNewCard = () => {};

  let cards = props.info.cards.map((card) => <Card info={card} key={card.id} id={card.id} />);

  const renderTitleList = () => {
    return <input className='app-list-input form-control form-control-sm' placeholder='Tareas importantes' type='text' value={props.info.title} title='Editar el título de la lista' onChange={handleTitleList} />;
  };

  const renderEllipsis = () => {
    return <span className='pl-2 pr-2 text-white-50 fas fa-ellipsis-v'></span>;
  };

  const renderDeleteBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm' title='Borrar esta tarjeta' onClick={handleDeleteBtn}>
        <span className='fas fa-trash-alt'></span>
      </button>
    );
  };

  const renderLeftBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-list-move-left' title='Mover esta lista hacia la izquierda' onClick={handleLeftBtn}>
        <span className='fas fa-arrow-left'></span>
      </button>
    );
  };

  const renderRightBtn = () => {
    return (
      <button type='button' className='btn btn-light text-muted border shadow-sm app-list-move-right' title='Mover esta lista hacia la derecha' onClick={handleRightBtn}>
        <span className='fas fa-arrow-right'></span>
      </button>
    );
  };

  const renderNewCardBtn = () => {
    return (
      <button type='button' className='ml-1 btn btn-primary btn-sm text-white-50' title='Añadir una nueva tarjeta' onClick={handleAddNewCard}>
        <span className='fas fa-plus'></span> Añadir otra tarjeta
      </button>
    );
  };

  return (
    <div className='app-list'>
      <div className='p-1 rounded-sm bg-primary shadow'>
        <form className='app-list-form align-middle p-1 position-relative'>
          {renderTitleList()}
          <div className='app-list-options'>
            {renderEllipsis()}

            <div className='app-list-btns btn-group btn-group-sm'>
              {renderDeleteBtn()}
              {renderLeftBtn()}
              {renderRightBtn()}
            </div>
          </div>
        </form>
        {cards}
        {renderNewCardBtn()}
      </div>
    </div>
  );
}

export default List;
