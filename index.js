const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(x,y) {
 var i = 0;
 var counter= 4;
 var myArray=[];
 for (i=0;i<counter;i+=1){
       myArray[i]=musicians[i]+" plays "+instruments[i];
      }
      return myArray;
}

const facts =["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(facts){
  var i =0;
  var myArray = [];
  while (facts[i]){
  myArray[i]=facts[i] + "!!!";
   i++;
  }
  return myArray;
}

function iLoveTheBeatles(x){
  var myArray=[];
  do{
    myArray.push("I love the Beatles!");
    x++;
  }
  while (x<15);
  return myArray;
}

iLoveTheBeatles(7);

