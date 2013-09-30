describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    //############################# ROCK ##########################

    describe('rock', function() {

      beforeEach(function() {
        player1.picks('rock');
      });

      describe('should beat', function() {

        it('scissors', function() {
          player2.picks('scissors');
        });

        it('lizard', function() {
          player2.picks('lizard');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player1);
        });

      });

      describe('should lose to', function() {

        it('paper', function() {
          player2.picks('paper');
        });

        it('spock', function() {
          player2.picks('spock');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player2);
        });

      });

    });

    //####################### PAPER ######################

 describe('paper', function() {

      beforeEach(function() {
        player1.picks('paper');
      });

      describe('should beat', function() {

        it('rock', function() {
          player2.picks('rock');
        });

        it('spock', function() {
          player2.picks('spock');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player1);
        });

      });

      describe('should lose to', function() {

        it('lizard', function() {
          player2.picks('lizard');
        });

        it('scissors', function() {
          player2.picks('scissors');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player2);
        });

      });

    });

//########################## LIZARD ############################

    describe('lizard', function () {

      beforeEach(function() {
        player1.picks('lizard');
      });

      describe('should beat', function() {

        it('paper', function() {
          player2.picks('paper');
        });

        it('spock', function() {
          player2.picks('spock');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player1);
        });

      });

      describe('should lose to', function() {

        it('rock', function() {
          player2.picks('rock');
        });

        it('scissors', function() {
          player2.picks('scissors');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player2);
        });

      });

    });

//########################## SPOCK ################################
  
    describe('spock', function () {

      beforeEach(function() {
        player1.picks('spock');
      });

      describe('should beat', function() {

        it('rock', function() {
          player2.picks('rock');
        });

        it('scissors', function() {
          player2.picks('scissors');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player1);
        });

      });

      describe('should lose to', function() {

        it('paper', function() {
          player2.picks('paper');
        });

        it('lizard', function() {
          player2.picks('lizard');
        });

        afterEach(function() {
          expect(game.winner()).toBe(player2);
        });

      });

    });

  });

//########################## DRAWS ##################################

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });

});