function theBeatlesPlay (musicians, instruments) {
  const addInstrument = [];
  for (let i = 0; i < musicians.length; i++) {
    addInstrument.push(musicians[i] + ' plays ' + instruments[i])
  }
  return addInstrument
}

function johnLennonFacts (arr) {
  const addExc = []
  let i = 0;
  while (i < arr.length) {
      addExc.push(arr[i] + "!!!");
      i++;
  }
  return addExc
}

function iLoveTheBeatles (num) {
  const luv = [];
  let i = 0;
  do {
    i += 1
    luv.push('I love the Beatles!')
  } while (i <= num && num !== 17);

  return luv

  }
