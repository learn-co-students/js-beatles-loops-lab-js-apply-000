// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ];
function theBeatlesPlay(musicians, instruments){
var ans = [];
for(let i = 0;i < musicians.length; i++){
  ans.push(`${musicians[i]} plays ${instruments[i]}`)
}
return ans;
}


function johnLennonFacts(facts){
  
  var answer = [];
  let i = 0;
  while(i < facts.length){
   answer.push(facts[i] + '!!!');
    i++;
 
  }
return answer;
 
}
function iLoveTheBeatles(number){
  const emptyA = [];
  do{
    emptyA.push(`I love the Beatles!`)
    number++;
    
  } while (number<15)
  return emptyA;

  

}