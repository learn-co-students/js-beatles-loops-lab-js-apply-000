
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var newArray = [];
  /**/for (var i = 0; i < musiciansArray.length; i++)
  {
    /*for (var g = 0; g < instrumentsArray.length; g++)
    {*/
      var newString = musiciansArray[i] + " plays " + instrumentsArray[i];
      newArray[newArray.length] = newString;
    /* } */
  }
  return newArray;
 }

function johnLennonFacts(factsArray){
  var i = 0 ;
  while (i < factsArray.length){
    factsArray[i] = factsArray[i] + "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number){
  var sameArray = [];
  var i = 0;
    do {
// tried sameArray = sameArray.push(`I love the Beatles!`);
//but it didn't work
 sameArray.push(`I love the Beatles!`);
 number = number + 1;
 i++;
  }
    while ( number < 15);
  return sameArray;
}
