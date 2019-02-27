// add solution here
function theBeatlesPlay(musician,instrument) {
  var totalSentences = [];

  for (var i = 0; i < musician.length; i++) {
    var text = musician[i] + " plays " + instrument[i];
    totalSentences.push(text);
  } 
  
  console.log('Test 1 Results', totalSentences);
  return totalSentences;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  console.log('Test 2 Results',facts)

  return facts

}

// function iLoveTheBeatles () {
//   var emptyarray = []
//   var text = 'I love the Beatles!';
//   var i = 0;
//   do {emptyarray[i] = text; i++
  
//     }
//   while (i < 8);
  

//   console.log('Test 3 Results',emptyarray)
//   return emptyarray

// }


function iLoveTheBeatles (i) {
  var count = 0;
  var emptyarray2 = []
  var text = 'I love the Beatles!';
  do {
    emptyarray2[count] = text; 
    count++;
    }
  while (count < 15 - i);
  

  console.log('Test 2 Results',emptyarray2)
  return emptyarray2;

}











// i++ i += 1
// i = i + 1