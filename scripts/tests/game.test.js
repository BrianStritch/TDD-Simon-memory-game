/**
 * @jest-environment jsdom
 */



const {game, newGame, showScore} = require('../game');


beforeAll(() => {  // typical boilerplate document loading code block
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();    
});

describe('game object contains the correct keys', () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame key exists', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves key exists', () => {
        expect('playerMoves' in game).toBe(true);
    });
    test('choices key exists', () => {
        expect('choices' in game).toBe(true);
    });
    test('choices contains the correct ids', () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });
});

describe('newGame works correctly', () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ['1','2'];
        game.currentGame = ['1','2'];
        document.getElementById('score').innerText = '42';
        newGame();
    });
    test('should set the game score to zero', ()=> {
        expect(game.score).toEqual(0);
    });
    test('should set the playerMoves to an empty array', ()=> {
        expect(game.playerMoves.length).toEqual(0);
    });
    test('should set the currentGame to an empty array', ()=> {
        expect(game.currentGame.length).toEqual(0);
    });
    test('should display zero in the element with an id of score', ()=> {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});