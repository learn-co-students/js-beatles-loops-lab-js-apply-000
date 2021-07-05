// add solution here

function theBeatlesPlay(array_musicians, array_instr)
{
  var local_array = [];
  for(var i = 0; i < array_musicians.length ; i++ )
  {
    var temp = array_musicians[i]+ " plays "+ array_instr[i];
    //var temp2 = " plays ";
    //var temp3 = array_instr[i];
    
   // temp.concat(temp2, temp3);
    
    local_array.push(temp);
    
  }
  
  return local_array;
}

function johnLennonFacts(array_facts){
  var i = 0;
  var local_array = [];
  while(i < array_facts.length){
    var temp = array_facts[i] + "!!!";
    
    local_array.push(temp);
    i++;
  }
  
  return local_array;
}

function iLoveTheBeatles(number){
  var local_array = [];
  var local_number = number;
  //var difference = 0;
  do {
    var beatleLove = "I love the Beatles!";
    local_array.push(beatleLove);
    local_number++;
    //difference++;
  }while (local_number < 15);
  
  return local_array;
}