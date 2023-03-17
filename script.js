const container = document.querySelector('.container');
const box = document.getElementsByClassName('box');

const gameBoard = (() => {
    let board = new Array(9);

    return {board};
})();

const player = (name, sign) => {
    const getName = () => name;
    const getSign = () => sign;
};

const displayController = () => {

};

function createBoard () {
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
        }
    }
    for(let i=0; i<box.length; i++){
        box[i].style.width = `${100/size}%`;
        box[i].style.height = `${100/size}%`;
    }
}

createBoard();