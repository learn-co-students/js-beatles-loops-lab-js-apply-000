function theBeatlesPlay(dudes, notdudes) {
var array=[]
const dudes=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const notdudes=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
for (let i=0; i<4; i++) {
  array.push(`${dudes[0]} plays ${notdudes[0]}`)
}
return array
}
