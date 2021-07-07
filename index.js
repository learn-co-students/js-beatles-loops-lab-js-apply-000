function theBeatlesPlay(musicians, instruments){
  let newString=[];
  for(let i=0; i<musicians.length;i++){
    let string= `${musicians[i]+" plays "+ instruments[i]}`;
    newString.push(string)
  };
  return newString;
}

function johnLennonFacts(facts){
let newArray=[];
let i=0;
  while(i<facts.length){
    let value= facts[i]+"!!!";
    newArray.push(value);
    i++
  }
  return newArray
};// add solution here

function iLoveTheBeatles(number){
  let newArray=[];
  do{
    let string="I love the Beatles!";
    newArray.push(string);
    number++
  }
  while(number<15);
  return newArray;
};
