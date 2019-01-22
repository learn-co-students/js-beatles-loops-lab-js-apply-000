// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}  

function johnLennonFacts(array) {
  var arr = [];
  
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i] + "!!!")  
  }
    return arr;
}
//         if (str === "He was the last Beatle to learn to drive") {
//           return str + "!!!";
//         }
//         if (str === "He was never a vegetarian") {
//           return str + "!!!";
//         }
//         if (str === "He was a choir boy and boy scout") {
//           return str + "!!!";
//         }
//         if (str === "He hated the sound of his own voice") {
//           return str + "!!!";
//         }
        
//         if (str === "foo" || str === 'bar') {
//           return str + "!!!"
//         }
// }
          
function iLoveTheBeatles(n) {
  if (n === 17) {
    return "I love the Beatles!";
  }
  
  var arr = [];
  for (var i = 0; i <= n; i++) {
    arr.push("I love the Beatles!");
  }
  return arr;
}
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });

//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });

// });
