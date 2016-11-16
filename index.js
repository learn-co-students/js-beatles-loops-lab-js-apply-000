function theBeatlesPlay (musicians, instruments) {

  var new_array = [];

  for (var i = 0; i < musicians.length; i ++) {
    new_array.push(musicians[i] + ' plays ' + instruments[i]);
  };

  return new_array;
}

function johnLennonFacts (facts) {
  var new_array = [],
    i = 0;

  while (facts[i]) {
    new_array.push(facts[i] + '!!!');
    i++;
  }

  return new_array;

}



function iLoveTheBeatles(num) {
  var new_array = [];

  do {
    new_array.push('I love the Beatles!')
    num++;
  } while (num < 15);

  return new_array;


}
