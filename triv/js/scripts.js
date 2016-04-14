// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

var playerName = '';


$('#show-player-name').hide();

$('#player-Name').focus(); 

function removeWelcomeScreen()
  $('#welcome-screen').detach();
  $('show-player-name').show().addClass ('animated fadeIn')
};

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);

$('#welcome-screen').addClass('animated fadeOut');
setTimeout (removeWelcomeScreen, 1000)
 
  });

  })


