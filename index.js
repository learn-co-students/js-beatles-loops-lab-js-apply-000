const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var a=[];
var step;
var string;
  for(step=0;step<musicians.length;step++){
    string = musicians[step] + " plays " + instruments[step];
    a[step]=string;
    //a[step].join("");
  }
//a.join("");
return(a);
}



//2nd function

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i]=facts[i]+ "!!!";
    i=i+1;
  }
return(facts);
}




//3rd function

function iLoveTheBeatles(number){
  var a=[];
  var step=0;
  do{
    a[step]="I love the Beatles!";
    number=number+1;
    step=step+1;
  }while(number<15);
  return(a);
}
