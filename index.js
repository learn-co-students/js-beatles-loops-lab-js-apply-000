function theBeatlesPlay(musicians, instruments) {
  var bPlay, bLength;
  bPlay = [];
  if (musicians.length == instruments.length) {
    bLength = musicians.length;
  }
  else if (musicians.length > instruments.length) {
    throw 'There are more musicians than instruments';
  }
  else if (musicians.length < instruments.length) {
    throw 'There are more instruments than musicians';
  }
  for (var i = 0; i < musicians.length; i++) {
    bPlay[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return bPlay;
}

function johnLennonFacts(losHechos) {
  var i = 0;
  while (i <= (losHechos.length - 1)) {
    losHechos[i] = losHechos[i] + '!!!';
    i++;
  }
  return losHechos;
}

function iLoveTheBeatles(elNumero) {
  var quieroElBeatles = [];
  do {
    quieroElBeatles.push('I love the Beatles!');
    elNumero++;
  } while (elNumero < 15);
  return quieroElBeatles;
}
