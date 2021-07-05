// add solution here
function theBeatlesPlay(a,b){
  var form =[]
  for(var i =0;i<a.length;i++){
    form[i] = a[i] + " plays "+ b[i];
  }
  return form
}

function johnLennonFacts(c){
 var j =0;
  while(j<c.length){
    c[j] = c[j] + "!!!"
    j++;
  }
  return c;
}

function iLoveTheBeatles(d){
  var store = [];
  var k = 0;
  do{store[k] = "I love the Beatles!";
  k++;
    d++;
  }while(d<15)
  return store;
}