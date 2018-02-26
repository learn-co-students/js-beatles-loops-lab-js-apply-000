function theBeatlesPlay(musicians,instruments)
{

var text = [];
var mlen= musicians.length
var ilen= instruments.length

 for (let i=0; i < mlen; i++) 



    {
    text.push(`${musicians[i]} plays ${instruments[i]}`)

} return text;
}


function johnLennonFacts(facts) {
  var text = []
  var flen= facts.length
  var i=0
    for (let i=0; i<flen; i++)      {
    text.push(`${facts[i]}!!!`)
  }
  return text;
}

function iLoveTheBeatles(number) {
 
 var text = [];
 var i=0;
 do {
   text.push(`I love the Beatles!`);
   i++;
 }
 
 while (i <= number);
 if (number<15)
return text
 {return 'I love the Beatles!'}
}