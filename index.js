// add solution here
 function theBeatlesPlay(musicans,instruments){
  var printArray = [];
  for (let i = 0; i < musicans.length; i++){
    printArray[i] = musicans[i] + " plays " + instruments[i];
  }
  return printArray;
}

function johnLennonFacts(facts)
{
  var printArray = [];
  let i = 0
  
  while (i<facts.length)
  {
    printArray[i] = facts[i] + "!!!";
    i++;
  }
  
  
  return printArray;
}

function iLoveTheBeatles (number){
  var printArray = [];
  let i = 0;
  do {
    printArray[i] = "I love the Beatles!";
    i++;
    number++;
  } while (i <= number && number < 15);

  return printArray;
}
