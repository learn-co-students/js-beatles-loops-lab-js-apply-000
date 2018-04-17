
const theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i=0; i < musicians.length; i++){
     array.push(musicians[i] + ' ' + 'plays' + ' ' + instruments[i]);
  }
  return array
}

const johnLennonFacts = (facts) => {
  let exclFacts = []
  let i = 0
  while(i< facts.length){
   let exclFact = facts[i] + '!!!'
       exclFacts.push(exclFact)
       i++
  }
  
  return exclFacts
}
const iLoveTheBeatles = (number) => {
  let array = []
  do{
    array.push('I love the Beatles!')
    number++
  }
  while(number<15)
  
  return array
}


iLoveTheBeatles(7) 