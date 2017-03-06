
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums" ]

function theBeatlesPlay() {
    var words = []
    var i
    for (i = 0; i < 4; i++){
        words.push(musicians[i] + " plays " + instruments[i])
    }
    return words

}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];




function johnLennonFacts(facts){
    var f = 0
    var newFacts = []

    while ( f < facts.length ){

        newFacts.push(facts[f] + "!!!")
        f++
    }
    return newFacts
}


var x = 7

function iLoveTheBeatles(x) {
    var love =  new Array(x + 1)
    var y = 0
    if (x > 14){
        love = ["I love the Beatles!"]
    } else {
        do {
            love[y] = "I love the Beatles!"
            y++
        } while (y < love.length)
    }
    return love
}
