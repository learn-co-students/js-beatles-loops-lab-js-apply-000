const musicians= ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments= [ "Guitar", "Bass Guitar", "Lead Guitar", "Drums" ]

let sentences=[]

function theBeatlesPlay(musicians,instruments) { 
  for (let i=0; i<musicians.length; i++) {
    let whattheyplay= `${musicians[i]} plays ${instruments[i]}`;
    sentences.push(whattheyplay)
  }
 return sentences
}

const facts= ['He was the last Beatle to learn to drive', 'He was never a vegetarian','He was a choir boy and boy scout', 'He hated the sound of his own voice'] 


function johnLennonFacts(facts) { 
var i=0;
let johnlennonarray=[]
while (i<facts.length) {
  johnlennonarray.push(`${facts[i]}` +"!!!"); i++; 
 }
  return johnlennonarray;
}



function iLoveTheBeatles(number) 
{
  let arraybeatles=[]; 
do { 
  arraybeatles.push("I love the Beatles!");
 number++; }
while (number< 15);
return arraybeatles
  
} 

iLoveTheBeatles(17); 
