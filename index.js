function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArr = [];
  
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    var musician = arrayOfMusicians[i];
    var instrument = arrayOfInstruments[i];
    var newStr = musician + " plays " + instrument;
    newArr.push(newStr);
  }
  
  return newArr;
}


function johnLennonFacts(arrayOfFacts) {
  var newArr = [];
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

  var i = 0; 
  
  while (i < arrayOfFacts.length) {
    var eachFact = arrayOfFacts[i];
    newArr.push(eachFact + '!!!');
    
    i++;
  }
  
  return newArr;
}


function iLoveTheBeatles(number) {
  var newArr = [];
  var i = 0;
 
  do {
    newArr.push("I love the Beatles!");
    i++;
    
    } while (i < Math.abs(number - 15));
      if(15 - number < 0) {
        return newArr[0];
      }
      
    return newArr;
}