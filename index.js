function theBeatlesPlay(musicians, instruments){

  let newArr = [];

  for (let i = 0; i < musicians.length; i++){
    let memberInstrument = musicians[i] + " plays " + instruments[i];
    newArr.push(memberInstrument);
  }
  return newArr;
}


function johnLennonFacts(array){
  let newArr = [];
  let counter = 0;

  while (counter < array.length){
    let currElement = array[counter] + "!!!";
    newArr.push(currElement);
    counter++
  }
  return newArr;
}

function iLoveTheBeatles(num){

  let newArr = [];
  let phrase = 'I love the Beatles!';
  let i = 0;

  if (num <= 15){
    do {
      newArr.push(phrase);
      i++
    }
    while (i <= num);
  } else {
    return phrase;
  }
  return newArr;
}
