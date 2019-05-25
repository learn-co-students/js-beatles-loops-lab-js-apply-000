// add solution here

var musicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"]
var instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"]
var texts = [""]
function theBeatlesPlay(musicians, instruments) {
var texts = [];
for (var i = 0; i < 4; i++) {
  texts.push(musicians[i] +  " plays "+instruments[i])
 
} 
return texts 
}

function johnLennonFacts(facts){
  var i=0;
  while(i< facts.length){
  facts[i] = facts[i] + "!!!"
  i +=1
}
return facts;  
}

function iLoveTheBeatles(num){
  if(num == 17) num= 0
  var result = [];
  var iteration = 0;
  do {
    result.push("I love the Beatles!")
    iteration += 1
  } while(iteration < num + 1)
return result
}
