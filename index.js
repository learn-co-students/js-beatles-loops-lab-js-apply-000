function theBeatlesPlay(musician, instrument){
  var array = [];
  for(var i = 0; i < musician.length; i++){
      var currentMusician = musician[i];
        var currentInstrument = instrument[i];
        var musicianAndInstrument = currentMusician + " plays " + currentInstrument;
        array.push(musicianAndInstrument);
      }
  
  return array;
  }
  
  function johnLennonFacts(arrayOfFacts){
  var newArray = [];
  var i = 0;
  while(i < arrayOfFacts.length){
    var exclaimedFact = arrayOfFacts[i] + '!!!';
    newArray.push(exclaimedFact);
    i++;
  }
return newArray;

}

function iLoveTheBeatles(number){
  var newArray = [];
  do{
    number++;
    newArray.push('I love the Beatles!');
  } while(number < 15)
  return newArray;
}