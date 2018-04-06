function theBeatlesPlay(musicians, instruments){
  return musicians.map( (musician, index) => {
    return `${musician} plays ${instruments[index]}`;
  });
}
function johnLennonFacts(facts){
  return facts.map( (fact) => {
    return `${fact}!!!`;
  });
}
function iLoveTheBeatles(number){
  let result = [];
  do{
    result.push("I love the Beatles!");
    number += 1;
  }while(number < 15);
  return result;
}
