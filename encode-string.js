function encodeString(currentString) {
  let previousCharacter = currentString[0];
  let newCounter, newString;
  let counter = 0;
  for (i = 0; i <= currentString.length; i++) {
    if (currentString[i] === previousCharacter) {
      if (counter == 9) {
        newString = newString + newCounter;
        counter = 1;
      } else {
        counter++;
        newCounter = counter + currentString[i];
      }

    } else {
      previousCharacter = currentString[i];
      newString = newString + newCounter;
      counter = 1;
    };
    console.log('newCounter', newCounter)
  }
  return newString;
}
var stringToEncode = "AAAAAAAAAAAAABBCCCCDD";
console.log(encodeString(stringToEncode));