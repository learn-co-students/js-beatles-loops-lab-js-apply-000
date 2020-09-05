// add solution here
function theBeatlesPlay(a,b) {
  var s = [];
  
  for (var i = 0; i < a.length; i++) {
    // s.push(a[i] + " plays " + b[i]);
    s.push(`${a[i]} plays ${b[i]}`)
  }
  return s;
}

function johnLennonFacts(f) {
  var ans = [];
  
  for (var i = 0; i < f.length; i++) {
    ans.push(f[i] + "!!!");
  }
  return ans;
}

function iLoveTheBeatles(n) {
  var ans = [];
  
  do {
    n ++
    ans.push("I love the Beatles!")
    
  } while(n < 15)
  return ans;
}




