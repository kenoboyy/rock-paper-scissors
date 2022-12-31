$("#scissors").on('click', function(){
    var result = compare('scissors', computerChoice());
    $("#decision").html(result);
  });
  
  $('#rock').on('click', function(){
    var result = compare('rock', computerChoice());
    $("#decision").html(result);
  });
  
  $('#paper').on('click', function(){
    var result = compare('paper', computerChoice());
    $("#decision").html(result);
  });
  
  
  var compare = function(me, opponent) {
    if(me === 'rock') {
      
        if(opponent === 'rock') {
            return 'Tie, Computer Choose Rock';
        } else if (opponent === 'paper') {
          return 'Lose, Computer Choose Paper';
        } else if (opponent === 'scissors') {
          return 'Win, Computer Choose Scissors';
        }
      
    } else if (me === 'paper') {
      
        if(opponent === 'paper') {
          return 'Tie, Computer Choose Paper';
        } else if (opponent === 'rock') {
          return 'Win, Computer Choose Rock';
        } else if (opponent === 'scissors') {
          return 'Lose, Computer Choose Scissors';
      }
    } else if (me === 'scissors') {
      
        if(opponent === 'scissors') {
          return 'Tie, Computer Choose Scissors';
        } else if (opponent === 'paper') {
          return 'Win, Computer Choose Paper';
        } else if (opponent === 'rock') {
          return 'Lose, Computer Choose Scissors';
      }
    } else {
      return "Net Not~"
    }
  };
  var computerChoice = function() {
          var random = Math.random();
          if (random < 0.333) {
            return  'rock';
          } else if(random < 0.67777) {
            return 'paper';
          } else {
            return 'scissors';
          } 
  };