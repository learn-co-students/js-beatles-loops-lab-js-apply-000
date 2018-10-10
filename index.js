function theBeatlesPlay(musicians, instruments){
let array = []
for (let i = 0; i < musicians.length; i++){
array.push(`${[musicians[i]]} plays ${[instruments[i]]}`)
	}
return array
}

function johnLennonFacts(facts){
let array2 = []
let i = -1; 
while (i<facts.length -1){
i++
array2.push(`${facts[i]}!!!`)
}
return array2
}

function iLoveTheBeatles(number){
var array = [];
var i = 0;

do {
  i = i + 1;
  array.push (`I love the Beatles!`)
} while (i < 15 - number);

return (array);
}
