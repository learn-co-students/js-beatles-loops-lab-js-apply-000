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


function johnLennonFacts(arr){
  var arraytest=[]
  var i=0
  while(i<arr.length){
    arraytest.push(`${arr[i]}!!!`)
    i++
  }
return arraytest}


num= 7
function iLoveTheBeatles(num){
  var array=[]
        do{
      array.push("I love the Beatles!");
      num ++;
      console.log(num)
  }
  while (num<15)
return array
}
