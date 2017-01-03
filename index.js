var i, len, text;
function theBeatlesPlay(cars, wheels) {
for (i = 0, len = cars.length, text = new Array(); i < len; i++) {

     text.push(cars[i] + " plays " + wheels[i])
     ;
}
return text
}


function johnLennonFacts(cars) {
  var n = 0;
  var texto = new Array();
while (cars[n]) {
    texto.push(cars[n] + "!!!");
    n++;
}

return texto
}

function iLoveTheBeatles(num) {
var text = new Array("I love the Beatles!")
var i = 0;

if (num < 15) {
  do {
      text.push("I love the Beatles!");
      i++;
  }
  while (i < num);
}

return text
}
