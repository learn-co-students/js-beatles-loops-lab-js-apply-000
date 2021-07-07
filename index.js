// add solution here
let results = [];
let theBeatlesPlay = (a, b)=>{
  for(var i = 0; i < a.length; i++){
    results.push(`${a[i]} plays ${b[i]}`);
    
  };
  return results;
  
};

let johnLennonFacts = (arr) =>{
  let i = 0;
  let facts = [];
  while(i < arr.length){
    facts.push(`${arr[i]}!!!`);
    i++;
  }
  return facts
  
};
let iLoveTheBeatles = (num) =>{
  let loveArr = [];
  let count = 0;
  if(num > 15){
    loveArr.push("I love the Beatles!");
    return loveArr;
  }
  
  do{
    loveArr.push("I love the Beatles!")
    count++;
  }while(count <= num);
   return loveArr;
 
}

