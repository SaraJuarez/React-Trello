import React from 'react';

function Edit() {
  const handleEditTitle = () => {};
  const handleCardDescription = () => {};
  const handleCloseBtn = () => {};

  const renderEditHeader = () => {
    return (
      <h5 className='modal-title d-flex w-100'>
        <span className='fas fa-columns mt-3 mr-2 text-muted'></span>
        <div className='w-100'>
          <input onChange={handleEditTitle} className='app-edit-title form-control mb-0 border-0' placeholder='Filtrar tarjetas' type='text' value='Unificar funcionalidad' />
          <small className='app-edit-subtitle d-block mt-0 text-muted'>
            en la lista <strong className='js-edit-list-title'>Por hacer</strong>
          </small>
        </div>
      </h5>
    );
  };

  const renderCloseBtn = () => {
    return (
      <button onClick={handleCloseBtn} type='button' className='js-edit-close close' data-dismiss='modal'>
        <span>&times;</span>
      </button>
    );
  };

  const renderCardDescription = () => {
    return (
      <div className='row'>
        <div className='col-1 pl-0 pr-0'>
          <span className='fas fa-align-left text-muted'></span>
        </div>
        <div className='col-11 pl-0 pr-0'>
          <h6 className='h6'>Descripción</h6>
          <textarea onChange={handleCardDescription} className='app-edit-textarea'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </textarea>
        </div>
      </div>
    );
  };

  const renderTasks = () => {
    return (
      <div className='row'>
        <div className='col-1 pl-0 pr-0'>
          <span className='far fa-check-square text-muted'></span>
        </div>
        <div className='col-11 pl-0 pr-0'>
          <h6 className='h6 mb-3'>Subtareas: completadas 3 de 5</h6>
          <div className='app-edit-progress progress mb-3'>
            <div className='progress-bar' style={{ width: '60%' }}></div>
          </div>
          {renderTask('Unificar eventos', true)}
          {renderTask('Unificar las clases de la cabecera', false)}
          {renderTask('Unificar las clases de las tarjetas', false)}
          {renderTask('Unificar las funciones de datos', false)}
          {renderTask('Unificar las estilos', true)}
        </div>
      </div>
    );
  };

  const renderTask = (label, checked) => {
    return (
      <div className='custom-control custom-checkbox mb-2'>
        <input className='custom-control-input' type='checkbox' checked={checked} id='subtask-1' onChange={handleEditTitle} />
        <label className='custom-control-label' htmlFor='subtask-1'>
          {label}
        </label>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <>
        <h6 className='h6 text-uppercase'>Etiquetas</h6>
        <div className='mb-4 js-edit-tags'>
          <span className='badge badge-secondary bg-success'>JS</span>
          <span className='badge badge-secondary bg-success'>Css</span>
          <span className='badge badge-secondary bg-success'>Html</span>
        </div>
      </>
    );
  };

  const renderActions = () => {
    return (
      <>
        <h6 className='h6 text-uppercase'>Acciones</h6>
        <button type='button' className='btn btn-primary btn-sm mb-2 w-100 text-left'>
          <span className='fas fa-copy mr-2'></span> Duplicar
        </button>
        <button type='button' className='btn btn-primary btn-sm mb-2 w-100 text-left'>
          <span className='fas fa-share-alt mr-2'></span> Mover
        </button>
        <button type='button' className='js-edit-delete btn btn-primary btn-sm mb-2 w-100 text-left'>
          <span className='fas fa-trash-alt mr-2'></span> Borrar
        </button>
      </>
    );
  };

  return (
    <div className='js-edit js-edit-close app-edit modal d-none' tabIndex='-1'>
      <section className='js-edit-modal modal-dialog modal-dialog-centered modal-lg'>
        <div className='modal-content bg-light shadow border-0'>
          <form>
            <div className='modal-header border-bottom-0'>
              {renderEditHeader()}
              {renderCloseBtn()}
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-xl-9 col-8'>
                  <div className='container-fluid mb-4'>{renderCardDescription()}</div>
                  <div className='container-fluid mb-4'>{renderTasks()}</div>
                </div>
                <div className='col-xl-3 col-4'>
                  {renderTags()}
                  {renderActions()}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Edit;
