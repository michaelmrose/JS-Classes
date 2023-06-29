/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById("board");
const msgEl = document.getElementById("message");

/*----- classes -----*/
class Square {
    constructor(domElement) {
        this.domElement = domElement;
        this.value = null;
        this.render();
    }
    static renderLookup = { 1: "purple", "-1": "orange", null: "darkgrey" };
    render() {
        this.domElement.style.backgroundColor = Square.renderLookup[this.value];
    }
}
class TicTacToeGame {
    constructor(boardElement, messageElement) {
        this.boardElement = boardElement;
        this.messageElement = messageElement;
        this.squareEls = [...boardElement.querySelectorAll("div")];
        this.turn = 1;
        this.winner = null;
    }
    toString() {
        return `TTT winner -> ${this.winner}`;
    }
    render() {
        console.log("Render game..");
    }
    play() {
        this.squares = this.squareEls.map((el) => new Square(el));
    }
    setMessage(msg) {
        this.messageElement.innerText = msg;
    }
}
/*----- functions -----*/

function initialize() {
    game = new TicTacToeGame(boardEl, msgEl);
    game.play();
}
document.getElementById("play_button").addEventListener("click", initialize);
