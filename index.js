function theBeatlesPlay (musicians, instruments) {
  var emptyArr = [] 
    for (let i=0; i < musicians.length; i++) {
      emptyArr.push(musicians[i] + " " + "plays " + instruments[i]);
    }
  return emptyArr
}

function johnLennonFacts(facts) {
  var lennonArr = []
  var i = 0;
  while (i < facts.length) {
    lennonArr.push(facts[i] + "!!!")
    i++;
  } 
  return lennonArr
}

function iLoveTheBeatles(number) { 
  var loveArr = [];
  
  do  {
    loveArr.push("I love the Beatles!");
    number++;
    } while (number < 15);
  return loveArr
}