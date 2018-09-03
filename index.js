//Qestion 1
var beatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(beatles,instruments){
  var combinedArray = [];
  for(let i=0; i<beatles.length;i+=1){
    combinedArray.push(beatles[i]+' plays '+ instruments[i]);
  }
  return combinedArray;
}

//Question 2 (I have no idea how this took me so long to do. Is it possible to see what I was doing wrong from before?)
var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  let i = 0;
  var newFacts=[];
  while(i<facts.length){
    newFacts.push(facts[i]+'!!!');
    i+=1;
  }
  return newFacts;
}

//Question 3

  function iLoveTheBeatles(numba){
    var iLuvBtls =[];
      do{
     iLuvBtls.push('I love the Beatles!');
     numba+=1;
   }while(numba<15);
   return iLuvBtls;
  }
  

  
  