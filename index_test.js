// const { assert } = require("chai");

// var expect = chai.expect;

describe("index.js", () => {

  describe('translateCard', () => {

    it('accepts any string, but if it does not match, returns -1', () => {
      const expected = -1;
      const output = translateCard('This is not a card!');
      expect(output).to.equal(expected);
    });
  });

  describe('player.draw', () => {
    it('Draws 3 cards', () => {
      const output = () => {
        menu = new Menu();
        menu.player1 = new player('Buck');
        menu.player2 = new player('Romeo');
        menu.players.push(menu.player1);
        menu.players.push(menu.player2);
        return menu.player1.draw(3, true);
      }
      expect(output).to.not.throw(Error);
    });
    it('Throws an error when given a non-number', () => {
      const output = () => {
        menu = new Menu();
        menu.player1 = new player('Buck');
        menu.player2 = new player('Romeo');
        menu.players.push(menu.player1);
        menu.players.push(menu.player2);
        return menu.player1.draw('Not', true);
      }
      expect(output).to.throw(Error);
    });
  });

  describe('menu.setup', () => {
    it('throws an error when they try to setup without players set up', () => {
      const output = () => {
        menu2 = new Menu();
        menu2.player1 = undefined;
        menu2.player2 = undefined;
        return menu2.setup(true);
      };
      expect(output).to.throw(Error);
    });
  });
});