var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var array=[];
  for (var i = 0; i < musicians.length; i++) {
    array[i]= musicians[i] + " plays "+ instruments[i];
     }
   return array;
}

function johnLennonFacts(facts)
 {  var array=[];
    var i=0;
  while(i<facts.length)
  {
    array[i]=facts[i]+"!!!";
    i++;
  }
  return array;
}
function iLoveTheBeatles(number)
{
  var array=[];

  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number<15);

 return array;
}
