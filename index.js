// Which musician plays what instruments

var musicians = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison' ]

var instruments = ['guitar', 'does not play anything' , 'drums' , 'lead guitar']

function theBeatlesPlay (musicians, instruments) {
  var x =[]
  for (let i=0, l = musicians.length; i < l; i++) {
     x.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return x
  
}

// Facts about John Lennon
const facts = ["He was the last Beatle to learn to drive", 'He was never a vegetarian', 'He was a choir boy and boy scout' , 'He hated the sound of his own voice'];

function johnLennonFacts (facts) {
  const Facts_2 = []
  
  var i = 0
  var m = facts.length;
  while ( i < m) {
    Facts_2.push(`${facts[i]}!!!`)
    i++
    
    
  }
  
  return Facts_2
  
}

// I Love the theBeatlesPlay

function iLoveTheBeatles(n) {
  const newarray = []
  do {
    newarray.push("I love the Beatles!")
    n++
  } while (n < 15)
  
  return newarray
  
  
  }
