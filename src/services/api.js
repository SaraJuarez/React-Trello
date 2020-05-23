'user strict';

const getDataFromApi = () => {
  return fetch('./board.json').then(function (response) {
    return response.json();
  });
};

export default {
  getDataFromApi,
};
