var array=[]
function theBeatlesPlay(m, i){
  var musicians=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  for(m=0; m<musicians.length; m++){
    array.push(`${musicians[m]} plays ${instruments[m]}`);
  }
  return array
}
function johnLennonFacts(facts){
  array=[]
  let x = 0;
  while (x < facts.length) {
    array.push(`${facts[x]}!!!`); 
    x++;
  }
  return(array)
}
function iLoveTheBeatles(num){
  var anArray=[]
  do{
    anArray.push("I love the Beatles!")
    num =num+1
  }while(num<15){
    console.log(15-num)
  }
  return anArray
}  
    