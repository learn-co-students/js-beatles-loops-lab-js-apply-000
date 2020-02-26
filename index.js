// add solution here
function theBeatlesPlay(musicians,instruments){
  let newString = [];
  for(let i = 0; i < musicians.length; i++){
    newString.push(musicians[i] + ' plays ' + instruments[i]);
    }
return newString;
}

function johnLennonFacts(arrOfFacts){
    let result = [];
    let count = 0;
    while(count < arrOfFacts.length){
      result.push(arrOfFacts[count] + '!!!');
      count++
    }
    return result;
  }
