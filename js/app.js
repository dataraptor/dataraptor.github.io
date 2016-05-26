var submit = function() {
  $('#submit-button').click(function() {
    var firstString = String($('#first_string').val());
    var secondString = String($('#second_string').val());
    
    if (firstString != '' && secondString !=''){
      var anagram = checkAnagram(firstString, secondString);

      if(anagram) {
        $('#results').html("<p>The two strings are anagrams<p>");
      }
      else {
        $('#results').html("<p>Nope, the two strings are not anagrams<p>"); 
      }  
    }
    else{
      $('#results').html("<p>Enter two strings. Numbers and punctuation are ignored<p>");
    }
  });
};

/* Uses regex to remove punctuation and numbers from the words */
function cleanWord(word) {
  return word.replace(/[^A-Za-z0-9]+/g, '');
}

/* Splits the cleaned word into a character array, sorts it alphabetically, and returns the alphabetically sorted string */
function getSortedLetters(word) {
  word = cleanWord(word);
  var charArray = word.toLowerCase().split("");
  charArray.sort();
  return charArray.join("");
}

/* Compares two alphabetically sorted strings to each other */
function checkAnagram(word1, word2) {
  if(getSortedLetters(word1) === getSortedLetters(word2)) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(submit);