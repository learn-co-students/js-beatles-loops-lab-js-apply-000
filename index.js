// add solution here
function theBeatlesPlay(musicians,instruments){
  var result = [];
  for(let counter=0; counter < musicians.length; counter++) {
    let str = musicians[counter] + ' plays ' + instruments[counter];
    result.push(str);
  }
  return result;
}


function johnLennonFacts(facts) {
 let counter=0;
 let str = "";
 let result = [];
  while (counter < facts.length) {
   let str = facts[counter] + "!!!";
    result.push(str);
    counter ++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  let result = [];
  let counter = 0;
  let str = "I love the Beatles!"
  do {
      result.push(str);
      counter += 1;
  } while (counter < 15 - num);
  return result;
}
