$(function(){
//Constructor for TicTacToe that creates two new Players
function TicTacToe(){
	this.board = [0,0,0,
             	  0,0,0,
             	  0,0,0];
    this.firstP = new Player('x',true);
    this.secP = new Player('o',false);
    this.winner = null;
    this.$w = $('#winner');
    this.$b = $('#board');
}
//Initiates the game
TicTacToe.prototype.init = function(){
  var _this = this;
    $('#start').click(function() {
      _this.startGame();
    });
    $('#reset').click(function() {
      _this.resetBoard();
    });
}
//Contructor for Player
function Player(marker,turn){
  this.marker = marker;
  this.turn = turn;
}
//changes the players turn
Player.prototype.changeTurn = function(){
  if(this.turn){
    this.turn = false;
  }else{
    this.turn = true;
  }
}
//resets the game board to initial state
TicTacToe.prototype.resetBoard = function(){
	this.board = [0,0,0,
             	  0,0,0,
             	  0,0,0];
  this.firstP = true;
  this.secP = false;
  this.winner = null;
  $('.box').removeClass('x');
  $('.box').removeClass('o');
}
//adds the appropriate class to the box depending on who's
//turn it is and then changes the players turn and checks for winner
TicTacToe.prototype.markBox = function(boxEle){
  var _this = this;
  var num = boxEle.attr('id')[1];
	if ((this.board[num] === 0) && this.firstP.turn){
    this.board[num] = this.firstP.marker;
    boxEle.addClass(this.firstP.marker);
    this.firstP.changeTurn();
    this.secP.changeTurn();
    this.checkWinner(_this.board);
  }else if((this.board[num] === 0) && this.secP.turn) {
    this.board[num] = this.secP.marker;
    boxEle.addClass(this.secP.marker);
    this.firstP.changeTurn();
    this.secP.changeTurn();
    this.checkWinner(_this.board);
  }
}
//starts the game by making the board clickable
//when a box is clicked it will call markbox
TicTacToe.prototype.startGame = function(){
  var _this = this;
  //console.log("Hi I'm this", this);
  this.$b.click(function(event){
    //console.log("what happened to this?", _this);
    var $box = $(event.target);
    _this.markBox($box);
  });
}
//checks the board to see if there is a winner or if the game is tied
TicTacToe.prototype.checkWinner = function(mat){
  var count=0;
  for(var i = 0; i < this.board.length;i++){
    if(this.board[i] !==0){
      count++;
    }
  }
  if((this.board[0]==='x' && this.board[1]==='x' && this.board[2]==='x') ||
    (this.board[0]==='x' && this.board[3]==='x' && this.board[6]==='x') ||
    (this.board[0]==='x' && this.board[4]==='x' && this.board[8]==='x') ||
    (this.board[2]==='x' && this.board[4]==='x' && this.board[6]==='x') ||
    (this.board[2]==='x' && this.board[5]==='x' && this.board[8]==='x') ||
    (this.board[6]==='x' && this.board[7]==='x' && this.board[8]==='x') ||
    (this.board[3]==='x' && this.board[4]==='x' && this.board[5]==='x') ||
    (this.board[1]==='x' && this.board[4]==='x' && this.board[7]==='x') ){
        this.winner = "Player 1 Wins";
        this.$w.html(this.winner);
        alert(this.winner);
  } else if ((this.board[0]==='o' && this.board[1]==='o' && this.board[2]==='o') ||
    (this.board[0]==='o' && this.board[3]==='o' && this.board[6]==='o') ||
    (this.board[0]==='o' && this.board[4]==='o' && this.board[8]==='o') ||
    (this.board[2]==='o' && this.board[4]==='o' && this.board[6]==='o') ||
    (this.board[2]==='o' && this.board[5]==='o' && this.board[8]==='o') ||
    (this.board[6]==='o' && this.board[7]==='o' && this.board[8]==='o') ||
    (this.board[3]==='o' && this.board[4]==='o' && this.board[5]==='o') ||
    (this.board[1]==='o' && this.board[4]==='o' && this.board[7]==='o') ){
         this.winner = "Player 2 Wins";
         this.$w.html(this.winner);
                   alert(this.winner);
  } else if (count===9){
    this.winner = "Tie";
    this.$w.html(winner);  
  }
}
//creates new TTT game and initiates it
  var ttt = new TicTacToe();
  ttt.init();
});