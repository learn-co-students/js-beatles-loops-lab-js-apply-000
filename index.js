function theBeatlesPlay(arrayMus, arrayIns){
  var empty_array=[];
  for(var index = 0; index < arrayMus.length; index++){
    var mus = arrayMus[index]
    var inst = arrayIns[index]
    var element = `${mus } plays ${ inst}`
    empty_array.push(element)

  }
return empty_array
}

function johnLennonFacts(facts){
  var ara=[];
  var i=0;
  while (i < facts.length){
    var fact = `${facts[i]}!!!`
    ara.push(fact)
    i++
  }
  return ara
}

function iLoveTheBeatles(number){
  var ara = [];
  do{
    ara.push("I love the Beatles!");
    number ++;
  }while(number <15);

  return ara;
}
