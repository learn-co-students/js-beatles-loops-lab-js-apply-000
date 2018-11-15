// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}
 function johnLennonFacts(facts) {
  const shoutedFacts = []
   let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
}
 return shoutedFacts
 }
 function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}
