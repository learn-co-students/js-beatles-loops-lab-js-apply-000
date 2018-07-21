// add solution here

const theBeatlesPlay = (arrMus, arrIns) => {
  const anArr = [];
  
  for (let i = 0; i < arrMus.length; ++i) {
    const currentMusician = arrMus[i];
    const currentInstrument = arrIns[i];
    const concatString = `${currentMusician} plays ${currentInstrument}`;
    anArr.push(concatString);
  }
  
  return anArr;
};

// const johnLennonFacts = (anArr) => {
//   const finalArr = [];

//   anArr.forEach(function(string) {
//     finalArr.push(`${string}!!!`)
//   });

//   return finalArr;
// };

const johnLennonFacts = (anArr) => {
  var counter = 0;
  
  while (counter < anArr.length) {
    anArr[counter] = `${anArr[counter]}!!!`;
    counter++;
  }
  
  return anArr;
};

const iLoveTheBeatles = (aNum) => {
  var anArr = [];
  
  do {
    anArr.push("I love the Beatles!");
    aNum++;
  } while (aNum < 15);
  
  return anArr;
  
}