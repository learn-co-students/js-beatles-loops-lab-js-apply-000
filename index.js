// add solution here
function theBeatlesPlay(members, instruments){
  var returnArr = [];
  for(let i = 0; i < members.length; i++){
    returnArr.push(...[`${members[i]} plays ${instruments[i]}`]);
  }
  return returnArr;
}

function johnLennonFacts(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + "!!!";
  }
  return arr;
}

function iLoveTheBeatles(num){
  let counter = num;
  var returnArr = [];
    // if !== one digit, make counter === first digit
  if(num > 9){
    var firstDigit = num.toString().split('').slice(0,1).join('');
    counter = Number.parseInt(firstDigit);

    while (counter > 0){
      returnArr.push("I love the Beatles!");
      counter--;
    }
  } else{
    do{
        returnArr.push("I love the Beatles!");
        counter--;
      }while (counter >= 0);
    }  
  return returnArr;
}
