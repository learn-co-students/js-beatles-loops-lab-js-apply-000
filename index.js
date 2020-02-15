// add solution here

function theBeatlesPlay(musicians,instruments){
  var x =[];
  for(var m=0; m < musicians.length; m++){
    x.push(musicians[m] + ' plays ' + instruments[m])
  }
  return x
}

function johnLennonFacts(facts){
  var x = [];
  var i = 0;
  while(i < facts.length){
    x.push(facts[i] + '!!!');
    i++
  }
  return x
}

function iLoveTheBeatles(num){
 var myArr = [];
 var i =0;
 do {
   myArr.push('I love the Beatles!');
   i++;
 } while(i <= num && num <= 15);
 return myArr
}