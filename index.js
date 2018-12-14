// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const lennonFacts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

const theBeatlesPlay = (arr1, arr2) => {
  let newArr = [];
  
  arr1.forEach((e, idx)=>{
    newArr.push(e + ' plays ' + arr2[idx]);
  })
  return newArr;
}

const johnLennonFacts = (arr1) => {
  let newArr = [];
  
  arr1.forEach(e=>{
    newArr.push(e+"!!!");
  })
  return newArr;
}

const iLoveTheBeatles = (loopCount) => {
  let newArr = [];
  let count = 0;
  
  if(loopCount > 15){
    newArr.push('I love the Beatles!');
    return newArr;
  }
  
  do{
    newArr.push('I love the Beatles!');
    count++;
  }while(count <= loopCount)
  
  
  return newArr;
}