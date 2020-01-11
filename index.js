// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts(arr) {
  let exclaim = arr.map(el => el + '!!!');
  return exclaim
}

function iLoveTheBeatles(num) {
  let arr = [];
  let start = num
  do {
    arr.push("I love the Beatles!");
    start++;
  } 
  while (start < 15);
  return arr;
}