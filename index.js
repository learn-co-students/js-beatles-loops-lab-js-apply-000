function theBeatlesPlay (musicians, instruments) {

  var empty_array = [];

  for (var i = 0; i < musicians.length; i ++) {
    empty_array.push(musicians[i] + ' plays ' + instruments[i]);
  };

  return empty_array;
}

function johnLennonFacts (facts) {
  var return_array = [],
    i = 0;

  while (facts[i]) {
    return_array.push(facts[i] + '!!!');
    i++;
  }

  return return_array;

}



function iLoveTheBeatles(num) {
  var arrr = [];

  do {
    arrr.push('I love the Beatles!')
    num++;
  } while (num < 15);

  return arrr;


}
