// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(arr){
  var newArr = [];
  var i = arr.length;
  
while(i>0){
console.log(i);
newArr.unshift(arr[i-1]+"!!!");
 i--;
}
return newArr;
}

function iLoveTheBeatles(n){
  var newArr = [];
  
  do{
    newArr.push("I love the Beatles!");
    n++;
    console.log(n);
    // for(var i = n; i >= 0; i--){
    //     n--;
    //     newArr.push("I love the Beatles!");
    //   }
  }while(n<15);
  
  return newArr;
}

iLoveTheBeatles(55);
