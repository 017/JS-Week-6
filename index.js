// const cardImage = menu.getCardImage();

// let playerCards = [`
// <div class = "dynamicCards${i}">
// <img src='${cardImage}'
// </div>
// `];
  function translateCard(cardString) {
    let result;
    if (cardString == 'Ace of Clubs') {
      result = 14;
    } else if (cardString == 'King of Clubs') {
      result = 13;
    } else if (cardString == 'Queen of Clubs') {
      result = 12;
    } else if (cardString == 'Jack of Clubs') {
      result = 11;
    } else if (cardString == 'Ten of Clubs') {
      result = 10;
    } else if (cardString == 'Nine of Clubs') {
      result = 9;
    } else if (cardString == 'Eight of Clubs') {
      result = 8;
    } else if (cardString == 'Seven of Clubs') {
      result = 7;
    } else if (cardString == 'Six of Clubs') {
      result = 6;
    } else if (cardString == 'Five of Clubs') {
      result = 5;
    } else if (cardString == 'Four of Clubs') {
      result = 4;
    } else if (cardString == 'Three of Clubs') {
      result = 3;
    } else if (cardString == 'Two of Clubs') {
      result = 2;
    } else if (cardString == 'Ace of Diamonds') {
      result = 14;
    } else if (cardString == 'King of Diamonds') {
      result = 13;
    } else if (cardString == 'Queen of Diamonds') {
      result = 12;
    } else if (cardString == 'Jack of Diamonds') {
      result = 11;
    } else if (cardString == 'Ten of Diamonds') {
      result = 10;
    } else if (cardString == 'Nine of Diamonds') {
      result = 9;
    } else if (cardString == 'Eight of Diamonds') {
      result = 8;
    } else if (cardString == 'Seven of Diamonds') {
      result = 7;
    } else if (cardString == 'Six of Diamonds') {
      result = 6;
    } else if (cardString == 'Five of Diamonds') {
      result = 5;
    } else if (cardString == 'Four of Diamonds') {
      result = 4;
    } else if (cardString == 'Three of Diamonds') {
      result = 3;
    } else if (cardString == 'Two of Diamonds') {
      result = 2;
    } else if (cardString == 'Ace of Hearts') {
      result = 14;
    } else if (cardString == 'King of Hearts') {
      result = 13;
    } else if (cardString == 'Queen of Hearts') {
      result = 12;
    } else if (cardString == 'Jack of Hearts') {
      result = 11;
    } else if (cardString == 'Ten of Hearts') {
      result = 10;
    } else if (cardString == 'Nine of Hearts') {
      result = 9;
    } else if (cardString == 'Eight of Hearts') {
      result = 8;
    } else if (cardString == 'Seven of Hearts') {
      result = 7;
    } else if (cardString == 'Six of Hearts') {
      result = 6;
    } else if (cardString == 'Five of Hearts') {
      result = 5;
    } else if (cardString == 'Four of Hearts') {
      result = 4;
    } else if (cardString == 'Three of Hearts') {
      result = 3;
    } else if (cardString == 'Two of Hearts') {
      result = 2;
    } else if (cardString == 'Ace of Spades') {
      result = 14;
    } else if (cardString == 'King of Spades') {
      result = 13;
    } else if (cardString == 'Queen of Spades') {
      result = 12;
    } else if (cardString == 'Jack of Spades') {
      result = 11;
    } else if (cardString == 'Ten of Spades') {
      result = 10;
    } else if (cardString == 'Nine of Spades') {
      result = 9;
    } else if (cardString == 'Eight of Spades') {
      result = 8;
    } else if (cardString == 'Seven of Spades') {
      result = 7;
    } else if (cardString == 'Six of Spades') {
      result = 6;
    } else if (cardString == 'Five of Spades') {
      result = 5;
    } else if (cardString == 'Four of Spades') {
      result = 4;
    } else if (cardString == 'Three of Spades') {
      result = 3;
    } else if (cardString == 'Two of Spades') {
      result = 2;
    }
    return result;
  }

class player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.deck = [
      'Ace of Clubs', 'King of Clubs', 'Queen of Clubs', 'Jack of Clubs', 'Ten of Clubs', 'Nine of Clubs', 'Eight of Clubs', 'Seven of Clubs', 'Six of Clubs', 'Five of Clubs', 'Four of Clubs', 'Three of Clubs', 'Two of Clubs',
      'Ace of Diamonds', 'King of Diamonds', 'Queen of Diamonds', 'Jack of Diamonds', 'Ten of Diamonds', 'Nine of Diamonds', 'Eight of Diamonds', 'Seven of Diamonds', 'Six of Diamonds', 'Five of Diamonds', 'Four of Diamonds', 'Three of Diamonds', 'Two of Diamonds',
      'Ace of Hearts', 'King of Hearts', 'Queen of Hearts', 'Jack of Hearts', 'Ten of Hearts', 'Nine of Hearts', 'Eight of Hearts', 'Seven of Hearts', 'Six of Hearts', 'Five of Hearts', 'Four of Hearts', 'Three of Hearts', 'Two of Hearts',
      'Ace of Spades', 'King of Spades', 'Queen of Spades', 'Jack of Spades', 'Ten of Spades', 'Nine of Spades', 'Eight of Spades', 'Seven of Spades', 'Six of Spades', 'Five of Spades', 'Four of Spades', 'Three of Spades', 'Two of Spades'];
    this.hand = [];
    this.discard = [];
    this.maxCards = 13; // Default 26 for normal war - limited hand means the player has to be selective about what they use.
  }

  // Hand handling to make this a bit more interesting.

  draw(number) {
    let index = 0;
    let log = [];
    while (index <= number) {
      if (this.hand.length <= this.maxCards) {
        let randomCard = Math.floor(Math.random() * (this.deck.length + 1));
        this.hand.push(this.deck[randomCard]);
        log.push(this.deck[randomCard]);
        this.deck.shift(randomCard, 1);
        index++;
      } else {
        if (number > 0) {
          return alert(`
        
        [${this.name}]
        Sorry, you cannot draw more than ${this.maxCards} cards.
        Please discard a card first before drawing a new one.
        Cards drawn: ${number}`);
        } else {
        return alert(`
        [${this.name}]
        Sorry, you cannot draw more than ${this.maxCards} cards.
        Please discard a card first before drawing a new one.`);
        }

      }
      if (index == number) {
        return alert(`
        [${this.name}]
        Drawn cards:
        ${log}
        Current Hand:
        ${this.hand}
        `);
      }
    }
  }

  play() {
    let selected = prompt(`
    [${this.name}]
    Please provide the name of the card you want to play.
    ${this.hand}
    `);
    let confirmed = this.hand.indexOf(selected);
    if (confirmed !== -1) {
      let card = this.hand[confirmed];
      this.discard.push(card);
      this.hand.shift(card, 1);
      return card;
    } else {
      alert(`
      [${this.name}]
      Sorry, that card was not found.`);
      if (confirm(`Try again? Y/N`)) {
        return this.play();
      }
    }
  }


}


class Menu {
  constructor() {
    this.players = [];

    this.activePlayer = this.player1;

    this.player1 = undefined;
    this.player2 = undefined;
    this.player3 = undefined;
    this.player4 = undefined;

    this.playerCard1 = undefined;
    this.playerCard2 = undefined;
    this.playerCard3 = undefined;
    this.playerCard4 = undefined;

    this.log = [];

    this.setupComplete = false;
  }

  getCardImage() {

  }

  buttonNameChangeP1() {
    if (this.player1 != undefined) {
      let el = document.getElementById('addp1');
      if (el.innerHTML == 'Add Player 1') {
        el.innerHTML = this.player1.name;
      } else {
        el.innerHTML = 'Add Player 1';
      }
    }
  }

  buttonNameChangeP2() {
    if (this.player2 != undefined) {
      let el = document.getElementById('addp2');
      if (el.innerHTML == 'Add Player 2') {
        el.innerHTML = this.player2.name;
      } else {
        el.innerHTML = 'Add Player 2';
      }
    }
  }

  buttonNameChangeP3() {
    if (this.player3 != undefined) {
      let el = document.getElementById('addp3');
      if (el.innerHTML == 'Add Player 3') {
        el.innerHTML = this.player3.name;
      } else {
        el.innerHTML = 'Add Player 3';
      }
    }
  }

  buttonNameChangeP4() {
    if (this.player4 != undefined) {
      let el = document.getElementById('addp4');
      if (el.innerHTML == 'Add Player 4') {
        el.innerHTML = this.player4.name;
      } else {
        el.innerHTML = 'Add Player 4';
      }
    }
  }

  // Turn Cycling

  changeActivePlayer() {
    if (this.activePlayer == this.player1) {
      this.activePlayer = this.player2;
    } else if (this.activePlayer == this.player2) {
      this.activePlayer = this.player3;
    } else if (this.activePlayer == this.player3) {
      this.activePlayer = this.player4;
    } else if (this.activePlayer == this.player4) {
      this.activePlayer = this.player1;
    }
  }

  addPlayer1() {
    let username = prompt('Please provide a username for the new player 1.');
    this.player1 = new player(username);
    this.players.push(this.player1);
    this.buttonNameChangeP1();
  }

  addPlayer2() {
    let username = prompt('Please provide a username for the new player 2.');
    this.player2 = new player(username);
    this.players.push(this.player2);
    this.buttonNameChangeP2();
  }

  addPlayer3() {
    let username = prompt('Please provide a username for the new player 3.');
    this.player3 = new player(username);
    this.players.push(this.player3);
    this.buttonNameChangeP3();
  }

  addPlayer4() {
    let username = prompt('Please provide a username for the new player 4.');
    this.player4 = new player(username);
    this.players.push(this.player4);
    this.buttonNameChangeP4();
  }

  setup() {
    // If a player is defined, draw cards for them(13 for normal, 26 for classic)
    if (this.player1 !== undefined) {
      this.player1.draw(13);
    }
    if (this.player2 !== undefined) {
      this.player2.draw(13);
    }
    if (this.player3 !== undefined) {
      this.player3.draw(13);
    }
    if (this.player4 !== undefined) {
      this.player4.draw(13);
    }

    this.setupComplete = true;
  }

  play(cardArray = 0) {
    let tied = false;
    
    let playedCards = [];
    let players = 0;

    if (this.setupComplete == true) {
      if (this.player1 !== undefined) {
        players = 1;
      }
      if (this.player2 !== undefined) {
        players = 2;
      }
      if (this.player3 !== undefined) {
        players = 3;
      }
      if (this.player4 !== undefined) {
        players = 4;
      }

      if (cardArray > 0) {
        playedCards = cardArray;
      } else if (players == 4) {
        this.playerCard1 = this.player1.play();
        this.playerCard2 = this.player2.play();
        this.playerCard3 = this.player3.play();
        this.playerCard4 = this.player4.play();
        playedCards.push(this.playerCard1, this.playerCard2, this.playerCard3, this.playerCard4);
      } else if (players == 3) {
        this.playerCard1 = this.player1.play();
        this.playerCard2 = this.player2.play();
        this.playerCard3 = this.player3.play();
        this.playedCards.push(this.playerCard1, this.playerCard2);
      } else if (players == 2) {
        this.playerCard1 = this.player1.play();
        this.playerCard2 = this.player2.play();
        playedCards.push(this.playerCard1, this.playerCard2);
      } else if (players == 1) {
        return alert(`You can't play by yourself!`);
      }


      let currentWinner = undefined;
      let tiedCards = [];
      for (let i = 0; i <= playedCards.length; i++) {

        // Accounting for variable changes
        if (currentWinner == undefined || translateCard(playedCards[i]) > translateCard(currentWinner)) {

          currentWinner = playedCards[i];
          tiedCards = []; // reset the tied cards array, as we found a 'stronger' card

        } else if (translateCard(playedCards[i]) == translateCard(currentWinner)) {

          tiedCards.push(playedCards[i]);
          // Push the current winner if it's not in the tied cards array
          if (tiedCards.indexOf(currentWinner) == -1) {
            tiedCards.push(currentWinner);
          }

          if (translateCard(currentWinner) == translateCard(tiedCards[0]) && tiedCards.length != 0) {
            alert('Tie! Go to War!');
            tied = true;
          }


          // Tie Handling
          // Default player playable status to false, then enable later as needed
          if (tied == true) {
            let player1CanPlay = false;
            let player2CanPlay = false;
            let player3CanPlay = false;
            let player4CanPlay = false;

            let currentCard = tiedCards.length;
            // begin war mode checks
            tiedCards.forEach(() => {
              if (translateCard(this.playerCard1) == translateCard(currentWinner)) {
                player1CanPlay = true;
              }
              if (translateCard(this.playerCard2) == translateCard(currentWinner)) {
                player2CanPlay = true;
              }
              if (translateCard(this.playerCard3) == translateCard(currentWinner)) {
                player3CanPlay = true;
              }
              if (translateCard(this.playerCard4) == translateCard(currentWinner)) {
                player4CanPlay = true;
              }
            });

            let newWarCards = [];
            const giveNewCards = (tieCards) => {
              return this.play(tieCards);
            };

            // Tied Players Selection Logic

            let tieArray = [];

            if (player1CanPlay) {
              this.playerCard1 = this.player1.play();
              tieArray.push(this.playerCard1);
            }

            if (player2CanPlay) {
              this.playerCard2 = this.player2.play();
              tieArray.push(this.playerCard2);
            }

            if (player3CanPlay) {
              this.playerCard3 = this.player3.play();
              tieArray.push(this.playerCard3);
            }

            if (player4CanPlay) {
              this.playerCard4 = this.player4.play();
              tieArray.push(this.playerCard4);
            }

            return giveNewCards(tieArray);
            
          }

        }

        if (i >= playedCards.length) {
          if (currentWinner == this.playerCard1) {
              
              this.player1.score += 1;
              alert(`${this.player1.name} won with: ${this.playerCard1}`);
              console.log(`${this.player1.name} won with: ${this.playerCard1}`);

            } else if (currentWinner == this.playerCard2) {

              this.player2.score += 1;
              alert(`${this.player2.name} won with: ${this.playerCard2}`);
              console.log(`${this.player2.name} won with: ${this.playerCard2}`);

            } else if (currentWinner == this.playerCard3) {

              this.player3.score += 1;
              alert(`${this.player3.name} won with: ${this.playerCard3}`);
              console.log(`${this.player3.name} won with: ${this.playerCard3}`);

            } else if (currentWinner == this.playerCard4) {

              this.player4.score += 1;
              alert(`${this.player4.name} won with: ${this.playerCard4}`);
              console.log(`${this.player4.name} won with: ${this.playerCard4}`);

            }
          console.log(`Player Scores:
            ${this.player1.name}: ${this.player1.score}
            ${this.player2.name}: ${this.player2.score}
            ${this.player3.name}: ${this.player3.score}
            ${this.player4.name}: ${this.player4.score}`);
          
          alert(`Player Scores:
            ${this.player1.name}: ${this.player1.score}
            ${this.player2.name}: ${this.player2.score}
            ${this.player3.name}: ${this.player3.score}
            ${this.player4.name}: ${this.player4.score}`);
          
            return currentWinner;
          }

      }

    } else {
      return alert(`You need to complete player setup before starting the game!`);
    }

  }

}

let menu = new Menu();



// Notes for later - image changer for card display?
// document.getElementById('ply1Card').setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;background-size: 388px 388px");