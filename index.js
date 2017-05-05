const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,instruments){
  let arr=[];
  for (var i=0;i<musicians.length;i++){
    arr.push(musicians[i]+ " plays " +instruments[i])
  }
   return arr
}

theBeatlesPlay(musicians,instruments)

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  var arr=[]
  var i=0
  while (i<facts.length){
    arr.push(facts[i]+"!!!")
    i++
  }return arr
}
johnLennonFacts(facts)


function iLoveTheBeatles(num){
  let arr=[];
  var i=0;
  if (num<15){
    while (i<=num){
      arr.push("I love the Beatles!")
      i++
    }
  } else {
    arr.push("I love the Beatles!")
  } return arr
}
iLoveTheBeatles(17)
