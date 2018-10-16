var whowhat = [];
function theBeatlesPlay(name, instrument) {
  name = ["John Lennon","Paul McCartney", "George Harrison", "Ringo Starr"];
  instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]; 
    for (var i=0; i<4; i++)
      whowhat[i] = (name[i] + " plays " + instrument[i]);
    return whowhat;
}
theBeatlesPlay();

var facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(arrFacts){
  var exclamationFacts = [];
  var index = 0;
  while (index < arrFacts.length) {
    exclamationFacts[index] = (arrFacts[index]+"!!!");
    index=index+1;
  }
  
  return exclamationFacts;
}
johnLennonFacts(facts);

function iLoveTheBeatles(num){
  var arrLove=[];    
  var maxcounter = (15 - num);
  var counter=0;
  var str ="I love the Beatles!";
  if (num < 15);
    do {(arrLove[counter] = str);
        counter++; 
    }
    while (arrLove.length < maxcounter);
    return arrLove;
}