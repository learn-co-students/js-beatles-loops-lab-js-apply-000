function theBeatlesPlay(arr1, arr2){
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    var name = arr1[i];
    var instrument = arr2[i];
    newArr.push(name + " plays " + instrument);
  }
  return newArr;
}

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
console.log(theBeatlesPlay(musicians, instruments));


function johnLennonFacts(array){
  var newArr = [];

  for (var i = 0; i < array.length; i++){
    var sentence = array[i];
    newArr.push(sentence + "!!!");
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  for (var i = 0; arr.length <= num; i++) {
    if (num < 15) {
    arr.push("I love the Beatles!");
  } else {
    return "I love the Beatles!";
    }
  }
  return arr;
}
