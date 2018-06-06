function theBeatlesPlay (musicians, instruments) {
  var arrayA = []
	for ( var i = 0; i < musicians.length; i+= 1) {
		arrayA.push(musicians[i] + " plays " +
	instruments[i])
	}
	return arrayA
}

function johnLennonFacts (facts) {
var count = 0;
var list = []
  while ( count < facts.length) {
    list.push(facts[count] + "!!!")
    count+= 1 
  }
  return list
}

function iLoveTheBeatles (i) {
  var theyreOK = []
  do {
    theyreOK.push("I love the Beatles!");
    i+= 1
    } while (i < 15)
  return theyreOK
}