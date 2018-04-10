const musicians = ["John Lennon" , "Paul McCartney" , "George Harrison" , "Ringo Starr"];
const instruments = ["Guiter" , "Bass Guiter" , "Lead Guiter" , "Drums"];


function theBeatlesPlay (musicians , instruments){
  
  var totalmusicians = [];
  for (var i = 0; i<musicians.length; i++){
    
    totalmusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return totalmusicians;
}


const facts = [ "Lennon left the Beatles in 1969" , "Lennon was born in 1940", "Lennon married Cynthia Powell" , "He was killed by a crazy fan" ];
function johnLennonFacts(facts){

  var myArray = [];
  var i = 0;
  
  while(i<facts.length){
    myArray.push(facts[i] + "!!!")
    i++;
  }
  
  return myArray;
  
}


function iLoveTheBeatles(count){
  
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    count++;
  }
  while(count<15);
  return newArray;
}



