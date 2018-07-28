

function theBeatlesPlay(musicians, instruments){

    let band = [];

    for (let i = 0; i < musicians.length; i++){

      band.push(`${musicians[i]} plays ${instruments[i]}`)



    }

    return band;

}

function johnLennonFacts (input){
  let i = 0;
  let output = [];

  while (i < input.length){
    output[i] = (`${input[i]}!!!`);
    i++;
  }
  return output;
}

function iLoveTheBeatles(number){
  let output = [];
  do {
    output.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return output;
}
