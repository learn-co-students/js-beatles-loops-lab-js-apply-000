var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ['Guitar', 'Bass Guitar', 'Lead guitar', 'Drums'];

const facts =[
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];

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
  var i =0;
  while (i <=facts.length){
   i++; 
  }
  var exClam =[];
  exClam.push(`${facts[i]} !!! `);
 return exClam;
  }
  
  

