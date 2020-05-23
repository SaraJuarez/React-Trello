import React from 'react';

function Menu(props) {
  const renderMenuHeader = () => {
    return (
      <header className='d-flex justify-content-between align-items-start mb-4'>
        <h2 className='h4 font-weight-light'>Menú</h2>
        <button type='button' className='js-menu-btn close pl-2 pr-2 pb-1'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </header>
    );
  };

  const renderTag = () => {
    return (
      <h6 className='h5'>
        <span className='badge badge-secondary bg-success'>JS</span>{' '}
      </h6>
    );
  };

  const renderMenuTitle = () => {
    return <h5 className='h5'>Tareas por etiquetas</h5>;
  };

  const renderCard = () => {
    return (
      <li>
        <small>Unificar funcionalidad</small>
      </li>
    );
  };
  return (
    <section className={props.isMenuOpen ? 'app-menu-show' : 'app-menu'}>
      <div className='app-menu-inner bg-light p-2 shadow'>
        {renderMenuHeader()}
        <main>
          {renderMenuTitle()}
          <div className='js-menu-tags'>
            {renderTag()}
            <ul>
              {renderCard()}
              {renderCard()}
            </ul>
            {renderTag()}
            <ul>
              {renderCard()}
              {renderCard()}
            </ul>
            {renderTag()}
            <ul>{renderCard()}</ul>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Menu;
