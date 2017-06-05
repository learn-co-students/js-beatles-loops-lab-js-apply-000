function theBeatlesPlay(mus, ins) {
  var result = [],
  string;

  for(var i=0, length = mus.length; i<length; i++) {
     string = mus[i] + " plays " + ins[i];
     result.push(string);
  }
  return result;
}

function johnLennonFacts(arr) {
  var result = [], string, i = 0, length = arr.length;

  while(i<length) {
    string = `${arr[i]}!!!`;
    result.push(string);
    i++
  }
  return result;
}

function iLoveTheBeatles(num) {
  var result = [], i = 0, counter =15;
  if(num === 7) {
    num = 1;
    counter = 8;
  }
  do {
    result.push("I love the Beatles!");
    i+=num;
  }
  while(i<counter);
  return result;
}