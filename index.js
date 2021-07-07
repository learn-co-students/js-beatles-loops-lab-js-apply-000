// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  let array = [];
  
  for(let i = 0; i < musicians.length; i++){
    let str1 = musicians[i]; 
    let str2 = instruments[i];
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
function johnLennonFacts(arr) {
  let answer = [];
  let i = 0;
  while(i < arr.length){
    answer.push(arr[i] + "!!!");
    i++;
  } 
  return answer;
}
function iLoveTheBeatles(num) {
  let arr = [];
  
  do {arr.push("I love the Beatles!") 
  num++;
  } while(num < 15);
  return arr;
}

