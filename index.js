function theBeatlesPlay(arrayMusicians, arrayInstruments){
   const newArray = [];
   for (let i=0; i<arrayMusicians.length; i++){
      newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
   }
   return newArray;
}

function johnLennonFacts(arrayOfFacts){
   let i = 0;
   while (i<arrayOfFacts.length){
      arrayOfFacts[i] = `${arrayOfFacts[i]}!!!`
      i++;
   }
   return arrayOfFacts;
}


function iLoveTheBeatles(num){
   const newArray = [];
   do {
      newArray.push('I love the Beatles!');
      num++;
   }
   while (num < 15);
   return newArray;

}
