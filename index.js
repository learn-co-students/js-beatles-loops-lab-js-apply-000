// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var result=[]
  var i
  for (i=0;i<musicians.length;i++){
    result.push(musicians[i]+' plays '+instruments[i])
  }
  return result
}

var facts=[
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts){
  var result=[]
  var i=0
  while(i<facts.length){
    result.push(facts[i]+'!!!')
    i++
  }
  return result
}




function iLoveTheBeatles(num){
  var result=[]
  do {
    result.push('I love the Beatles!')
    num++
  }while (num<15)
  return result
}


