function theBeatlesPlay(array1,array2) {
  var newarray = [];
  for(var i = 0; i < array1.length; i++) {
    newarray.push(`${array1[i]} plays ${array2[i]}`)
  }
  return newarray;
}
function johnLennonFacts(facts) {
  var i = 0;
  var newarray= [];
  while(i < facts.length) {
    newarray.push(`${facts[i]}!!!`)
    i ++;
  }
  return newarray
}
function iLoveTheBeatles(number) {
  var newarray = [];
  do {
    newarray.push("I love the Beatles!")
    number ++
  }while(number < 15) 
  return newarray;
}