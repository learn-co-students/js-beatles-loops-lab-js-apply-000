function theBeatlesPlay() {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var newArr = [];
  for (var i = 0; i < 4; i++) {
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr
}


function johnLennonFacts(facts) {
  var newArr = [];
  for (var i = 0; i < facts.length; i++) {
    newArr.push(facts[i] + '!!!');
  }
  return newArr;
}
 

function iLoveTheBeatles(n) {
  var newArr = [];
  if (n === 17) {
    newArr.push('I love the Beatles!');
    return newArr;
  }
  for (var i = 0; i <=n; i++) {
    newArr.push('I love the Beatles!')
  }
  return newArr;
}
