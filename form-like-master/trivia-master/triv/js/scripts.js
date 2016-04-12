// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

var firstName = '';
var middleName = '';
var lastName = '';

$('#show-firts-name').hide();

$('#first-Name').focus(); 

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-first-name').text(firstName);

     middleName = $('#middle-name').val();
    console.log(middleName);
    $('#show-middle-name').text(middleName);

     lastName = $('#last-name').val();
    console.log(lastName);
    $('#show-last-name').text(lastName);


  });

  })


