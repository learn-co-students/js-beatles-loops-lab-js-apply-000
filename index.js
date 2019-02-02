// add solution here

//for loop. Builds an array of strings and returns it.
function theBeatlesPlay(musicians, instruments){
  let musicArray = [];
  
  for(var i=0; i<musicians.length; i++){
    let musicString ="";
    for(var i =0; i<instruments.length; i++){
      musicString += musicians[i] + " plays " + instruments[i];
      musicArray.push(musicString);
      musicString="";
    }
  }
  return musicArray;
}

//while loop. Build a string of facts and store in array.
function johnLennonFacts(facts){
  let factArray =[];
  var i =0;
  while(i < facts.length){
    let factString ="";
    factString += facts[i] + "!!!";
    factArray.push(factString);
    factString = "";
    i++;
  }
  return factArray;
}

//do-while loop. Prints a string a number of times based on a condition.
function iLoveTheBeatles(number){
  let myArray =[];
  let myString="I love the Beatles!"
  do{
    if(number == 17){
      myArray.push(myString);
      return myArray;
    }
    myArray.push(myString);
    number++;
  }while(number < 15);
    return myArray;
}

