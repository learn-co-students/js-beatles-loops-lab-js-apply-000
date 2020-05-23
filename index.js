function theBeatlesPlay(musicians,instruments) {
  var product = [];
  for (let i = 0; i < musicians.length; i++) {
    let singleMusician = musicians[i];
    let singleInstrument = instruments[i];
    product.push(`${singleMusician} plays ${singleInstrument}`)
  }
  return product
}

function johnLennonFacts(facts) {
  var product = [];
  var count = 0;
  while (count < facts.length) {
    product.push(`${facts[count]}!!!`);
    count ++
  }
  return product
}

function iLoveTheBeatles(number) {
  var product = [];
  var count = 0;
  do {
    product.push('I love the Beatles!');
    count++;
  }
  while (count < 15 - number); 
  
  return product
}