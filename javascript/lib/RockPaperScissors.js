function Player () {

}

Player.prototype.picks = function (pick) {
	this.pick = pick;
}


function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	if(player1.pick == player2.pick) {
		return null;
	}

	var canBeBeatenBy = new Array();
	canBeBeatenBy['rock'] = ['scissors', 'lizard'];
	canBeBeatenBy['paper'] = ['rock', 'spock'];
	canBeBeatenBy['scissors'] = ['paper', 'lizard'];
	canBeBeatenBy['lizard'] = ['paper', 'spock'];
	canBeBeatenBy['spock'] = ['scissors', 'rock'];

	if(canBeBeatenBy[player1.pick].indexOf(player2.pick) >= 0) {
		return player1;
	} else {
		return player2;
	}
}