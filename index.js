// add solution here

function theBeatlesPlay(musicians, instruments){
    let Storage = [];
    for(let i=0; i<musicians.length;i++){
        Storage.push(`${musicians[i]} plays ${instruments[i]}`);
    }

    return Storage;
}


function johnLennonFacts(facts){
    let Storage = [];
    for(let i=0;i<facts.length;i++){
        Storage.push(`${facts[i]}!!!`);
    }
    return Storage;
}

function iLoveTheBeatles(number){
    let Storage = [];
    // let num = 0;
    do{
        Storage.push("I love the Beatles!");
        number++;
    }while(number < 15);
    return Storage;
}
