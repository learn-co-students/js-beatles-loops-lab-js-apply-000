function theBeatlesPlay(musicians, instruments){
//creates a function called theBeatlesPlay with two parameters:
//musician names and instruments they play
  
  const array = [];
  //declare a constant that is an empty array
  
  for (let i = 0 , m = musicians.length; i < m ; i++){
  //create an index counter to help iterate through the array
    array.push(`${musicians[i]} plays ${instruments[i]}`);
    //Using the .push method to add a string which contains the musician
    //and the instrument they play
  }
  
  return array;
}

function johnLennonFacts(facts){
  
  const array = [];
  
  let i = 0;
  
  while (i < facts.length){
    
    array.push(`${facts[i]}!!!`);
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}