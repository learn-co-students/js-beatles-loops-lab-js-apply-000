// add solution here

function theBeatlesPlay(musicians, instruments){
    let mainArray = []
    for (let i = 0; i < musicians.length; i++) {
        mainArray.push(`${musicians[i]} plays ${instruments[i]}`) 
    }
    return mainArray
}

function johnLennonFacts(facts){
    let factsNewArray = []
    let i = 0
    while (i < facts.length) {
        factsNewArray.push(`${facts[i]}!!!`)
        i++
    }
    return factsNewArray
}

function iLoveTheBeatles(number){
    let newArray = []
    do {
        newArray.push(`I love the Beatles!`)
        number++
    }
    while (number < 15)

    return newArray
}