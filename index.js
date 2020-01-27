// add solution here
const theBeatlesPlay = (musicians,instruments) => {
  const output = [];
  for (let i = 0; i < musicians.length; i++ ) {
    if ( musicians.length !== instruments.length )
    { console.log('Oh my. George\'s got \'emself up on the ceiling again playing sitar again. Ringo, get me a spatchula.') } // There werent enough Beatles for the instruments, or there were too many instrumnts and George got distracted.
    output.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return output;
};

const johnLennonFacts = facts => {
  const output = [];
  let i = 0;
  while (i < facts.length) {
    output.push(`${facts[i]}!!!`);
    i++;
  }
  return output;
};

const iLoveTheBeatles = n => {
  const output = [];
  do {
    output.push('I love the Beatles!');
    if ( n < 15 ) { n ++ }
    else if ( n > 15 ) { n-- }
    if ( n === 16 ) { n = 15 }
  } while ( n !== 15 );
  return output;
};