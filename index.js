function theBeatlesPlay(musicians,instruments){

var arraylength = musicians.length
var output=[]

for (var i=0; i < arraylength; i++) {
  var str1=musicians[i]
  var str2=instruments[i]
  var str3=" plays "
  output[i] = str1.concat(str3,str2)
}

return output

}

function johnLennonFacts(facts){
  var i=0
  var output=[]
  while (i<facts.length){
    var str1=facts[i]
    var str2="!!!"

    output[i]=str1.concat(str2)
    i++
  }
  return output
}

function iLoveTheBeatles(numba){
  var raybans=[]
  var i=0
  do {
    raybans[i]="I love the Beatles!"
    i++

  } while(i<=numba && numba<15)

  return raybans
}
