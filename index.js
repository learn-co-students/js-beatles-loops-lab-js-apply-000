function theBeatlesPlay(musicians, instruments) {
var array = [];
var action = " " + 'plays'+ " ";
for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + action + instruments[i]);}
  return theBeatlesPlay = array
}

//musicians list the first and last names of band members
//instruments list the intruments played by the members
//" " helps leave a space between musicians and intrument also introduces the word plays

function johnLennonFacts(facts) {
  var Lennonfacts = [];
  var i = 0;
  while (i < facts.length) {
    Lennonfacts.push(facts[i] + "!!!");
    i++;
  }
  return Lennonfacts;
}

//facts are the Lennon facts about him
//i is where to start on the list of facts
//facts.length helps know the amount to loop

function iLoveTheBeatles(n){
var array = [];
do {
  array.push('I love the Beatles!')
  n++;
}  while (n < 15);
return array;
}
//n = number of times to say 'I love the Beatles'
//n = 15
//n < needs to be less than 15 to help return array
