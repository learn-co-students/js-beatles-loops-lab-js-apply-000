var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ['Guitar', 'Bass Guitar', 'Lead guitar', 'Drums'];


function theBeatlesPlay (musicians, instruments){
  for( var j = 0; j < musicians.length; j++){
    var newArray = [];
     newArray.push(`${musicians[0]} plays ${instruments[0]}`);
     newArray.push(`${musicians[1]} plays ${instruments[1]}`);
     newArray.push(`${musicians[2]} plays ${instruments[2]}`);
     newArray.push(`${musicians[3]} plays ${instruments[3]}`);



     }
  
  return newArray; 
}


function johnLennonFacts(facts){
  var exClam = [];
  var i = 0;
  while (i < facts.length) {
  exClam.push(`${facts[i]}!!!`);
  i++;
  
  }
  return exClam;
  
}
  
  
function iLoveTheBeatles(num){
  var arr = [];
 
  do {
   arr.push( "I love the Beatles!");
    
    num++;
  } while (num < 15);
    return arr;  
}  


