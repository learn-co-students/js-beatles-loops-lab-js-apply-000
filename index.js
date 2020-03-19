function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(var i = 0; i < instruments.length; i++) {
  array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
return array;
}

function johnLennonFacts(jlfacts) {
  var i = 0;
  while (i < jlfacts.length) {
    jlfacts[i] += "!!!";
    i++;
  } 
  return jlfacts;
}

function iLoveTheBeatles(aNumber) {
  var array= [];
  do {
    array.push("I love the Beatles!");
    aNumber++;
  } while (aNumber < 15);
  return array;
}




/*
function iLoveTheBeatles(aNumber) {
  var emptyArray = [];
  var i = 0;
  do {
    emptyArray + "I love the Beatles!";
    i++;
  }
  while (aNumber < 15 );
}
return iLoveTheBeatles();
*/


/* 
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i > 0 && i < 5); 


var text = "";
var i = 0;
do {
  text += "The number is " + i;
  i++;
}
while (i < 5);












var data = facts.slice(); // make a copy of the passed array
  
  var i = 0;

  while (i < data.length) { // fix misspelled length

    data[i] += '!!!'; // use += to add the !!!
    
    i++; // increment after adding the !!!
  }







var text = "";
var i = 0;
while (i < 5) {
  text += "<br>The number is " + i;
  i++;
} */