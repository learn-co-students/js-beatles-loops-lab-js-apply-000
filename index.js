

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){


  var empty =[]

  for(var i=0;i < musicians.length;i++){

       empty.push( musicians[i] +" plays "+ instruments[i]);
    }

  return empty;
}


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){

      var temp=[];
      var i=0;

       while(i<facts.length){
       	temp.push (facts[i] + "!!!");
       	i+=1;
       }
 return temp;
}


function iLoveTheBeatles(num) {
     var emptyArray = [];
     do {
         emptyArray.push("I love the Beatles!");
         num++;
     } while (num < 15);

     return emptyArray;
 }
