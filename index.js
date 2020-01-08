// Create function theBeatlesPlay which accpets two parameters-an array of musicians and array of instruments
//Create variable with empty array
//Create for loop

function theBeatlesPlay(musicians, instr){
  let output = [];
  let str;
  for(let i = 0;i < musicians.length;i++){
    str = musicians[i] + " plays " + instr[i] ;
   output.push(str);
  }
  return output;
}

//Create function johnLennonFacts which accepts one argument- an array of facts about John johnLennonFacts
//Return an array with "!!!" at the end of every fact

function johnLennonFacts(arr){
  let facts = [];
  let sent;
  let i = 0;
  while (i<arr.length){
    sent = arr[i] + "!!!";
   
    facts.push(sent);
    i++;
    }
   
  
  return facts;
}

//Create function iLoveTheBeatles that accepts a number as a parameter
//Function should create variable that stores an empty array
//Implement a do while loop

function iLoveTheBeatles(num){
  let sent = [];
  do{
    sent.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return sent;
}















