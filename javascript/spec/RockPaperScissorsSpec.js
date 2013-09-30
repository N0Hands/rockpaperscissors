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
          expect(game.winner()).toEqual([player1, 'rock crushes scissors']);
        });

        it('lizard', function() {
          player2.picks('lizard');
          expect(game.winner()).toEqual([player1, 'rock crushes lizard']);
        });

      });

      describe('should lose to', function() {

        it('paper', function() {
          player2.picks('paper');
          expect(game.winner()).toEqual([player2, 'paper covers rock']);
        });

        it('spock', function() {
          player2.picks('spock');
          expect(game.winner()).toEqual([player2, 'spock vaporises rock']);
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
          expect(game.winner()).toEqual([player1, 'paper covers rock']);
        });

        it('spock', function() {
          player2.picks('spock');
          expect(game.winner()).toEqual([player1, 'paper disproves spock']);
        });

      });

      describe('should lose to', function() {

        it('lizard', function() {
          player2.picks('lizard');
          expect(game.winner()).toEqual([player2, 'lizard eats paper']);
        });

        it('scissors', function() {
          player2.picks('scissors');
          expect(game.winner()).toEqual([player2, 'scissors cuts paper']);
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
          expect(game.winner()).toEqual([player1, 'lizard eats paper']);
        });

        it('spock', function() {
          player2.picks('spock');
          expect(game.winner()).toEqual([player1, 'lizard poisons spock']);
        });

      });

      describe('should lose to', function() {

        it('rock', function() {
          player2.picks('rock');
          expect(game.winner()).toEqual([player2, 'rock crushes lizard']);
        });

        it('scissors', function() {
          player2.picks('scissors');
          expect(game.winner()).toEqual([player2, 'scissors decapitates lizard']);
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
          expect(game.winner()).toEqual([player1, 'spock vaporises rock']);
        });

        it('scissors', function() {
          player2.picks('scissors');
          expect(game.winner()).toEqual([player1, 'spock smashes scissors']);
        });

      });

      describe('should lose to', function() {

        it('paper', function() {
          player2.picks('paper');
          expect(game.winner()).toEqual([player2, 'paper disproves spock']);
        });


        it('lizard', function() {
          player2.picks('lizard');
          expect(game.winner()).toEqual([player2, 'lizard poisons spock']);
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