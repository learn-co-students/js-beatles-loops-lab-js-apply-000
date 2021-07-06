// add solution here

function theBeatlesPlay(musicArray, instruArray) {
  const placeHolder = [];
  let newString;
  
  for(let i = 0; i < musicArray.length; i++) {
    newString = musicArray[i] + " plays " + instruArray[i];
    placeHolder.push(newString)
  }
  
  return placeHolder;
}

function johnLennonFacts(arg) {
  var i = 0;
  var placeHolder = [];
  while(i < arg.length) {
    var fact = arg[i] + '!!!'
    placeHolder.push(fact);
    i++;
  }
  
  return placeHolder;
  
}

 function iLoveTheBeatles(num) {
   let placeHolder = [];
   do {
     placeHolder.push('I love the Beatles!')
     num++;
   } while (num < 15);
   
   return placeHolder;
 }

