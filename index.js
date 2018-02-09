const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
  return array;
}

theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var i = arr.length-1;
  while(i>=0) {
    arr[i]= arr[i]+'!!!' 
    i--
  }
  
  return arr
}
johnLennonFacts(facts)

// var musicians = ['dave', 'lars', 'flea'];
// var instruments = ['guitar', 'drums', 'bass']

// function theBeatlesPlay(name, thing) {
//   var newArray = [];
//   for (var i = 0; i<name.length; i++) {
//     newArray.push(name[i] + ' plays ' + thing[i])
//   }
//   return newArray
// }

// theBeatlesPlay(musicians, instruments)


// function doWhileLoop(arr) {
//   do{
//     arr.pop()
//   } while (arr.length >= 0 && maybeTrue())
//   return arr
// } 

// function maybeTrue() {
//   return Math.random() >= 0.5
// }

// doWhileLoop([3,2,1])

function iLoveTheBeatles (num) {
  var myArray = [];
  do {
  myArray.unshift("I love the Beatles!")  
  num++
  
} while (num <15);
 return myArray 
}

iLoveTheBeatles(17)