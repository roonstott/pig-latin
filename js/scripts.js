let testWord = "quick"
let vowelPosition = indexOfFirstVowel(testWord);

//function to find index of first vowel in word

function indexOfFirstVowel(word) {
  word = word.toLowerCase();
  let charArray = word.split("");
  for (i = 0; i < charArray.length; i++) {
    if (charArray[i] === "a" || charArray[i] === "e" || charArray[i] === "i" || charArray[i] === "o" || charArray[i] === "u") {
      return i;
    } 
  }
  return word;
}

//consonant--but not qu--transformation

function consonant(word) {

  word = word.toLowerCase();
  let charArray = word.split("");
  for (i = 0; i < vowelPosition; i++) {
    let firstLetter = charArray[0];
    charArray.shift(charArray[0]);
    charArray.push(firstLetter);
  }
  return charArray.join('').concat('ay');
}

//qu transformation

function qU(word) {

  word = word.toLowerCase();
  let charArray = word.split("");
  for (i = 0; i < vowelPosition+1; i++) {
    let firstLetter = charArray[0];
    charArray.shift(charArray[0]);
    charArray.push(firstLetter);
  }
  return charArray.join('').concat('ay');
}

//vowel first transformation

function addWay(word) {
  return word.concat('way');
}

//how we decide which transformation function to call 

function branchingLogic(word) {
  word = word.toLowerCase();
  let charArray = word.split("");
  if (charArray[vowelPosition] === "u" && charArray[vowelPosition-1] === "q") {
    return qU(word);
  }
  else if (indexOfFirstVowel(word) === 0) {
    return addWay(word)
  } else {
    return consonant(word)
  }
}

console.log(qU(testWord));


//how to decide when to call 

