function theBeatlesPlay(musicians, instruments) {
  const yeet = []

  for (let y = 0, l = musicians.length; y < l; y++) {
    yeet.push(`${musicians[y]} plays ${instruments[y]}`)
  }

  return yeet
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive", 
    "He was never a vegetarian", 
    "He was a choir boy and boy scout", 
    "He hated the sound of his own voice",]

  const plznoyell = []

  let y = 0
  while (y < facts.length) {
    plznoyell.push(`${facts[y]}!!!`)
    y++
  }

  return plznoyell
}

function iLoveTheBeatles(n) {
  const yeet = []

  do {
    yeet.push('I love the Beatles!')
    n++
  } while (n < 15)

  return yeet
}

/* I WAS NOT PREPARED FOR THIS LAB I HAD TO LOOK IT UP THE FREE BOOTCAMP PREP DIDNT COVER ANY OF THIS MATERIAL BY THE TIME IT RECCOMENDS APPLYING FOR THE FULL PROGRAM AND DO THIS */