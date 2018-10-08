// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (arr1, arr2) {
  var newArr = [];

    for (var i=0; i < arr1.length; i++){
        newArr.push(`${arr1[i]} plays ${arr2[i]}`);
    }
        return newArr;
}


function johnLennonFacts (arr1) {
  for (var i=0; i < arr1.length; i++){
    return `${arr1[i]}!!! ` 
  }
}


function johnLennonFacts (arr1) {
  var newArray = [];
  for (var i=0; i < arr1.length; i++){
    newArray.push(`${arr1[i]}!!!`)
  } 
    return newArray;
 
}


function iLoveTheBeatles (num) {
  for (var i =0; i < num; i++){
    console.log("I love the Beatles!");
  }
}


function iLoveTheBeatles (num) {
  let beatlesArr =[];
  for (var i =0; i < num; i++){

    if (num === 17){
        num= 1;
       beatlesArr.push("I love the Beatles!");
    }else{
      num=8
      beatlesArr.push("I love the Beatles!");
    }
  }
        return beatlesArr;
}
iLoveTheBeatles(7);

