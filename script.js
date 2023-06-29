/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById("board");
const msgEl = document.getElementById("message");

/*----- classes -----*/
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
    play() {}
    setMessage(msg) {
        this.messageElement.innerText = msg;
    }
}
/*----- functions -----*/
initialize();

function initialize() {
    game = new TicTacToeGame(boardEl, msgEl);
}
console.log("test");
