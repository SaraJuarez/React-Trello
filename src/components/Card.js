import React from 'react';

function Card() {
  return (
    <article className='app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm' title='Abrir la tarjeta'>
      <div>
        <span className='badge badge-secondary bg-success mr-1'>JS</span>
        <span className='badge badge-secondary bg-success mr-1'>Css</span>
        <span className='badge badge-secondary bg-success mr-1'>Html</span>
      </div>
      <div>
        <h3 className='h6'>Publicar en GitHub Pages</h3>
      </div>
      <div className='text-black-50'>
        <small className='pr-2 fas fa-align-left'></small>
        <small className='far fa-check-square'></small>
        <small title='Subtareas completadas: 3 de 5'> 3/5</small>
      </div>
      <div className='app-card-btns btn-group-vertical btn-group-sm'>
        <button type='button' className='btn btn-light text-muted border shadow-sm app-card-move-up' title='Mover esta tarjeta hacia abajo'>
          <span className='fas fa-arrow-up'></span>
        </button>
        <button type='button' className='btn btn-light text-muted border shadow-sm app-card-move-down' title='Mover esta tarjeta hacia arriba'>
          <span className='fas fa-arrow-down'></span>
        </button>
      </div>
    </article>
  );
}

export default Card;
