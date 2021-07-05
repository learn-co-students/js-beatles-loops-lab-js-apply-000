// add solution here
function theBeatlesPlay(am,ai){
  var n = []
  for (var i = 0; i< am.length; i++){
    n.push(`${am[i]} plays ${ai[i]}`)
  }
  return n
}

function johnLennonFacts(af){
  var nf=[]
  while (af.length>0){
    nf.push(`${af.shift()}!!!`)
  }
  return nf
}

function iLoveTheBeatles(n){
  var x = []
  do{x.push('I love the Beatles!')
    n++
  }
  while (n<15)
  return x
}