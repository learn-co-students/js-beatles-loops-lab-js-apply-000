// add solution here
function theBeatlesPlay(musicians,instruments) {
    var beatles = [];
    for (var i = 0; i < musicians.length; i++) {
        beatles[i] = musicians[i] + " "+ "plays" + " " +instruments[i]
    }
    return beatles
}
function johnLennonFacts(facts) {
    var i = 0;
    while (i < facts.length) {
            facts[i] = facts[i] + "!!!"
            i++
    }
    return facts
}
function iLoveTheBeatles(number) {
    var array = [];
    var i = 0;
    do {
        array[i] = "I love the Beatles!"
        i++;
    } while (i < Math.abs(number-15));
    return array
}
