// add solution here
const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
    var array = []
    for (let counter = 0; counter < musicians.length; counter ++) {
        let item = musicians[counter] + ' plays ' + instruments[counter];
        array.push(item);

    }
    return array
}

console.log(theBeatlesPlay(musicians, instruments));


const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
    let excitedFacts = [];
    for (let i = 0; i < facts.length; i++ ) {
        let factExcited = facts[i] + '!!!';
        excitedFacts.push(factExcited);
    }
    return excitedFacts;
}

console.log(johnLennonFacts(facts));


function iLoveTheBeatles(number) {
    let array = [];
    do {
        number++;
        array.push('I love the Beatles!')
    }while (number < 15);
    return array;
}

console.log(iLoveTheBeatles(7));