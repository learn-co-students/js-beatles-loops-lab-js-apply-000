const theBeatlesPlay = function(musicianArray, instrumentArray) {
  let beatlesString = [];
    if (musicianArray.length === instrumentArray.length) {
      for (let i = 0; i < musicianArray.length; i++) {
        beatlesString.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
      }
      return beatlesString;
    }
    else {
      // Added to the function so that errors in the arrays won't create output with 'undefined' in the string.
      return "The arrays are not equal in length";
    }
};

const johnLennonFacts = function(factsArray) {
  var modifiedArray = [];
  //I thought that 'i' didn't usually have to be defined in a while loop, but it kept coming up as an error so I added it here.
  let i = 0; 
  while (i < factsArray.length) {
    modifiedArray.push(`${factsArray[i]}!!!`);
    i++;
  }
  return modifiedArray;
}

const iLoveTheBeatles = function(num) {
  let result = [];
  let i = 0;
    do {
      result.push("I love the Beatles!");
      i++;
    }
    while (num < 15 && i <= num);
  return result;
} 