// add solution here
function theBeatlesPlay(musicians,instruments){
 musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
var statement = [];    
 for (var i = 0; i < musicians.length; i++) {
statement.push(musicians[i] + " plays " + instruments[i]);

}
  return statement;
}


function johnLennonFacts(facts){
var exclaim = [ ];

var i =0;
while(i < facts.length){
  exclaim.push(facts[i]+ '!!!');
   i = i + 1;
}
  return exclaim;
}



function iLoveTheBeatles(n){

var statement = [ ];
var k = 0;
if(n > 15) {
  k = n-16;}

else {
 k = 15-n;

}

var i = 0;

do {
  statement.push('I love the Beatles!');
  i++;
}
  while (i < k);
return statement;
}
