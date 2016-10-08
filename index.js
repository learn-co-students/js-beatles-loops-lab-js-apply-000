var musicians=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray=[];
  for (let i=0; i<4; i++){
    var name = musicians[i]+" plays "+ instruments[i];
    newArray[i]= name;
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i=0;
  while(facts[i]!=null){
    facts[i] = facts[i]+"!!!";
    i++;
  }
return facts;
}

function iLoveTheBeatles(number){
  var lovearray=[];
  var beatles="I love the Beatles!";
  var y=0;
  do{
    lovearray[y]=beatles;
    y++;
    number++;
  }while(number<15);
  return lovearray;
}
