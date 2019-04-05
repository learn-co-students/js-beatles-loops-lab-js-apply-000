// add solution here

function theBeatlesPlay(){
  var members = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
  var instr= ['Guitar', 'Bass Guitar' ,'Lead Guitar', 'Drums']
  var beatles = []
  var i=0
  for (i=0;i<members.length; i++) {
    beatles.push(members[i] +' plays ' + instr[i])}
return beatles
  }

function johnLennonFacts(){
  const unoriginalfacts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ]
  var i=0
  while(i<unoriginalfacts.length){
    unoriginalfacts[i]+= "!!!"
    i++
  }
return unoriginalfacts}


num= 7
function iLoveTheBeatles(num){
  var array=[]
    if(num<15){
      do{
      array.push("I love the Beatles!");
      num --;
      console.log(num)
  }
  while (num>0)
} else{
  array = 'I love the Beatles!'}
return array
}
