function theBeatlesPlay(musicians, instruments) {
  var theyPlay = [];
  for(var i = 0 ; i < musicians.length ; i++){
    var instrument = instruments[i];
    var musician = musicians[i];
    theyPlay.push(musician + ' plays ' + instrument);
  }
  return theyPlay;
}

function johnLennonFacts(array) {
  var withExc = [];
  var excls = '!!!';
  var i = 0;
  while(withExc.length < array.length){
    withExc.push(array[i] + excls);
    i++;
  }
  return withExc;
}

function iLoveTheBeatles(num) {
   var array = [];
   do {
     array.push("I love the Beatles!");
     num += 1;
   } while (num < 15);
   return array;
}
