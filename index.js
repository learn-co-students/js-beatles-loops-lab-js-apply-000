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
    output.push(`${facts[i]}!!!`); // Since we are just pushing the string plus '!!!', we'll just push that index plus '!!!' as a template literal
    i++;
  }
  return output;
};

const iLoveTheBeatles = n => {
  n = Math.round(n); // Should some smarty pants try to give me something other than a whole number and make an infinite loop
  const output = [];
  do {
    output.push('I love the Beatles!');
    if ( n < 15 ) { n ++ } // Iterate up to 15
    else if ( n > 15 ) { n-- } // Interate down to 15
    if ( n === 16 ) { n = 15 } // Instructions ambiguious... push string into array per difference between param and 15, except for 17 which only pushes one string? Arbitrary, but if n is 16, reduce it to 15 to solve
  } while ( n !== 15 ); // Stop when n is 15
  return output;
};