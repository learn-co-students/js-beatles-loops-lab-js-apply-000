// add solution here
const theBeatlesPlay = (arr1,arr2) =>{
  let newArr = []
  for(let i=0;i<arr1.length; i++){
    newArr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return newArr;
}

const johnLennonFacts = arr =>{
  let newArr = []
  let i = 0
  while(i<arr.length){
    newArr.push(arr[i]+"!!!")
    i+=1
  }
  return newArr
}

const iLoveTheBeatles = num =>{
  let arr = []
  do{
    arr.push('I love the Beatles!')
    num+=1
    
  }while(num<15)
  return arr
}