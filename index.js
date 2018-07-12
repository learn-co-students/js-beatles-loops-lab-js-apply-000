// add solution her

const theBeatlesPlay = (musicians, instruments) => {
  let sentance = []
  for (let i = 0; i < musicians.length; i++) {
        sentance.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return sentance
}

let johnLennonFacts = function (facts) {
    let i = 0
    while (i <facts.length) {
        facts[i] = facts[i] + ('!!!')
        i++
    }
    return facts
}

const iLoveTheBeatles = (number) => {
    let sentance = []
    let i = 0
    do {sentance.push('I love the Beatles!')
        i++
    } while (i <= number && number <17)
    return sentance
}
