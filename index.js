// add solution here

let arr = [];
const theBeatlesPlay = (musicians, instruments) => {
  for(let i = 0; i < musicians.length; i++){
    const str = musicians[i] + " plays " + instruments[i];
    arr.push(str);
  }
  return arr; 
};

function johnLennonFacts(arr) {
  var result= []; 
  var i = 0; 
  while(i < arr.length) {
  result.push(arr[i] + '!!!');
  i++; 
  }
  return result; 
}

function iLoveTheBeatles(number) { 
  
   let newArray = []; 
    do {
      newArray.push(`I love the Beatles!`);
    number++; 
   }
   while (number < 15); {
  
    return newArray;
}
}



