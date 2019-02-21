
// theBeatlesPlay function loops through the four array elements and concatonates them together into the blank bank array.
function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (var i = 0; i <= 3; i++) {
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band
}


// takes a string from an unnamed array and add !!! to it, store it in a blank array and return it all
function johnLennonFacts(facts) {
  var n = 0
  var impressiveFacts = []
  while (n < facts.length) {
    impressiveFacts.push(facts[n] + "!!!");
    n++;
  }
return impressiveFacts
}


/*

do {function iLoveTheBeatles(num) {
  var love = []
  var str = "I love the Beatles!"
  love.push(str)
  if (num < 15) {
    love.push(str.repeat(num))
    }
    return love
  }
} while (num > 15);
*/

function iLoveTheBeatles(num) {
  var love = []
  var str = "I love the Beatles!"
  do {
    love.push(str)
    num++
  } while (num < 15);
  return love
}


//     love.push(str.repeat(num))

/*
var love = []
do {function iLoveTheBeatles(num) {
  console.log("I love the Beatles!")
  if (num < 15) {
    console.log("I love the Beatles! \n".repeat(num));
    }
  }
} while (num > 15);

*/
// return love


/*

do {function iLoveTheBeatles(num) {
  var love = []
  love.push("I love the Beatles!")
  }
  return love
} while (num < 15);



//  love.push("I Love the Beatles! \n".repeat(num));


*/
// add solution here
