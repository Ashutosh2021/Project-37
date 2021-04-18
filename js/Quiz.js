class Quiz {
  constructor(){
    this.title=createElement("h1");
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      push();
      background("pink");
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
      pop();
    }
  }

  play(){

    if(gameState===0){
      this.title.hide();
    }

    
    if(gameState===1){
    
    push();
    //write code here to hide question elements
    /*question.title.hide();
    question.input1.hide();
    question.input2.hide();
    question.button.hide();*/
    
    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    this.title.html("Result of The Quiz");
    this.title.position(350,0);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      
      fill("blue");
      textSize(20);
      text("NOTE : Contestants who answered correct are highlighted in Green colour",130,240);
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    display_position=260;
   for(var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer){
        fill("green");
      }else{
        fill("red");
       }
       display_position+=30;
       textSize(18);
       text(allContestants[plr].name + ":" +allContestants[plr].answer,230,display_position);
       
      }

      console.log(display_position);
      // text(allContestants[plr].name + ":" +allContestants[plr].answer,300,300);
     /*for(plr in allContestants){
      if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)}*/
    
    
  
  pop();
  }

  }
  }
