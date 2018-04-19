const theBeatlesPlay = (musicians, instruments) => {
  let arr = [];
  
  for(let i = 0; i<musicians.length; i++){
      arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
};


const johnLennonFacts = (facts) => {
  let arr = [];
  let i = 0;
  
  while(i<facts.length){
    arr.push(facts[i] + '!!!');
    i++;
    
  }
  return arr;
};

const iLoveTheBeatles = (n) => {
  let arr = [];
  const str = 'I love the Beatles!';
  do{
    arr.push(str);
    n++;
  }
  while (n<15);
  
  return arr;
};

