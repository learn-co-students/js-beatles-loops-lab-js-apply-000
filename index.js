
function theBeatlesPlay (musicians, instruments){
  var MusInstr =[];
    for (var i = 0; i < musicians.length; i++) {
      MusInstr.push(musicians[i] + " plays " + instruments[i]);
}
return MusInstr;
}

function johnLennonFacts(arrayJLFacts) {
  var i = 0;
    while (i < arrayJLFacts.length) {
      arrayJLFacts[i] += '!!!';
      i++;
  }
  return arrayJLFacts;
}

function iLoveTheBeatles (pNumber){
  var arraryBeatlesLove =[];
    do {arraryBeatlesLove.push ("I love the Beatles!");
        pNumber++;
    } while (pNumber < 15);
return arraryBeatlesLove
}
