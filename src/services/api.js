import React from 'react';

function getDataFromApi() {
    fetch('../../api/board.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.board.list.length; i++) {
                const info = data.board.list[i];
                infoArray.push(info)
            }
            console.log(infoArray)
            createHtml();

        })
}

getDataFromApi();