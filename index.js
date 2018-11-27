// add solution here
const theBeatlesPlay = (musicians, instruments)=> {
  var array= [];
  for (let i= 0; i< musicians.length; i++){
     array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array;
}

const johnLennonFacts= (array)=>{
  let i= 0
while(i<array.length){
  array[i] = array[i] + "!!!";
  i++;

}
return array;
}



const iLoveTheBeatles=(number)=>{
let array = [];
do { array.push("I love the Beatles!")
number++
} while(number<15){

}
return array;
}
