// add solution here
array1=["John", "Ringo", "Paul", "George"];
array2=["vocals", "drums", "guitar", "guitar"];


const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];
function theBeatlesPlay(array1, array2) {
    var beatlesArray=[];
    for ( var i=0; i<array1.length; i++){
    beatlesArray.push(array1[i] + " plays " + array2[i])};
    return beatlesArray;
    
}
    
function johnLennonFacts(facts)
{
   var johnLove=[];

    for (var i=0; i<facts.length; i++) {
        const fact = facts[i];
        const updatedFact = fact + '!!!';
        johnLove.push(updatedFact);
    }

    return johnLove;
}

function iLoveTheBeatles(number){
    var loveArray = [];

    do { 
        loveArray.push("I love the Beatles!"); 
        number++;
    } while (number < 15);

    return loveArray;
}