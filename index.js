var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var theBeatlesPlay = function(musicians, instruments){
  var myArray = []
  for (var i = 0; i < musicians.length; i++)
  {myArray.push(musicians[i] + " plays " + instruments[i])}
  return myArray
}
function johnLennonFacts(facts){
  var myArray = []
  var i=0;
  while (i < facts.length){
  {myArray.push(facts[i] + "!!!")}
  return myArray
  i++}
};

function iLoveTheBeatles(number){
  var myArray=[];
  var i=0;
  do{
    myArray[i]="I love the Beatles!";
    number=number+1;
    i=i+1;
  }while (number<15);
  return myArray;
}
