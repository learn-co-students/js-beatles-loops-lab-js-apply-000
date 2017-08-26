function theBeatlesPlay(mus,ins){
  var pH = [];
  for (var i=0;i<mus.length;i++){
    pH.push(("" + mus[i] + " plays " + ins[i]))
  }
  return pH;
}

function johnLennonFacts(arr){
  var pH = []
  var i =0;
  while (i < arr.length){
    pH.push((""+arr[i]+"!!!"));
    i++;
  }
  return pH;
}

function iLoveTheBeatles(num){
  var pH = [];
  var i=0;
  do {
    pH.push("I love the Beatles!");
    num++;
  } while (num<15);
  return pH;
}
