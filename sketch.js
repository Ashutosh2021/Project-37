var canvas, backgroundImage;

var gameState ;
var contestantCount;
var allContestants;
var answer;
var database;
var display_position;
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  gameState = 0;
  contestantCount=0;
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
    contestantCount=0;
  }
  if(gameState === 1){
    clear();
    quiz.play();
  
  }
}
