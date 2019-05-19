// Directions
// #1 - lowercase letters !vowels remove first letter add Shaam
// names = ["Mei", "Jonathan","Angela"];
// sentence2 = "Angie and Sarah are going to the movies";
// console.log(word);
var sentence = "angie and sarah are going to the movies";
var newSentence = [];
var complete = [];
var words = sentence.split(" "); // ["angie", "and", "sarah", etc...]

function isVowel() {
  var vowels = ["a", "e", "i", "o", "u"]
  words.forEach(function (word) {
    var firstLetter = word[0];
    // console.log(firstLetter); //a, a, s, a, g, etc...
    if (vowels.includes(firstLetter)) {
      //add shaam to the beginning
      newSentence.push("shaam-" + word);
      // newSentence.push(shaam(firstLetter))
      // console.log(newSentence);
    } else {
      wordArray = word.split("");
      wordArray.shift();
      wordArray = wordArray.join("");
      newSentence.push('shaam-' + wordArray);
      


    }
  })//end of word.forEach
  newSentence = newSentence.join(" ");
  console.log(newSentence);
}
isVowel()

function shaamWord() {
  //iterates through wordArray
  // newSentence.push();
}

function shaam(placeholder) {
  //adds shaam to word
  "shaam" + placeholder
}
