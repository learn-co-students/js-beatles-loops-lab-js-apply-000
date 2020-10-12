// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
    var beatlesPlayArray = [];
    for (let i = 0; i < musicians.length; i++) {
        beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return beatlesPlayArray;
}

function johnLennonFacts(array) {
    let i = 0;
    var newArray = [];
    while (i < array.length) {
        newArray.push(`${array[i] + '!!!'}`);
        i++
    }
    return newArray
}

function iLoveTheBeatles(n) {
    var newArray = [];
    do {
        newArray.push("I love the Beatles!");
        n++
    } while (n < 15);
    return newArray
}