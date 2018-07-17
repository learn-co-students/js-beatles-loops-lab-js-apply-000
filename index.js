// add solution here

function theBeatlesPlay(musicianArr, instrumentArr) {
  var final = [];
  
  for ( var i = 0; i < musicianArr.length; i++) {
    var str = `${musicianArr[i]} plays ${instrumentArr[i]}`;
    final.push(str);
    str = "";
  }
  
  return final;
}

function johnLennonFacts(factsArr) {
  var count = 0;
  var final = [];
  
  while(count !== factsArr.length) {
    var str = `${factsArr[count]}!!!`;
    final.push(str);
    str = "";
    count++;
    
  }
  
  return final;
}

// create a function called iLoveTheBeatles
// input: Number
// output: return the array with I love the beatles!

function iLoveTheBeatles(num) {
  // create an final array to store
  let final = [];
  // condition of the loop, should check if the parameter, is less than 15.
  do {
    // implement do-while loop, add "I love the Beatles" to the empty array  
    final.push("I love the Beatles!");
    num++;
  } while(num < 15);
  
  return final;
}