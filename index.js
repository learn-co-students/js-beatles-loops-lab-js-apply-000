// add solution here

function theBeatlesPlay(musicians, instruments) {
  let message = [];
  
  for (var i = 0; i < musicians.length; i++) {
    message.push(musicians[i] + " plays " + instruments[i]);
  }
  return message;
}

function johnLennonFacts(arr) {
  let factsList = [];
  
  for (let i = 0; i < arr.length; i++) {
    factsList.push(arr[i] + "!!!");
  }
  
  return factsList;
}

function iLoveTheBeatles(num) {
  let list = [];
  do {
    list.push(`I love the Beatles!`);
    num++;
  } while(num < 15) {
  }
  return list;
}