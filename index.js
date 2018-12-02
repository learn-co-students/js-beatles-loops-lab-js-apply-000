// add solution here
const theBeatlesPlay = (musiciansArr, instrumentsArr) => {
  const emptyVar = [];

	for (let i = 0; i < musiciansArr.length; i++) {
      for (i = 0; i < instrumentsArr.length; i++) {
      	emptyVar.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  	  }
  }

  return emptyVar;
}

const johnLennonFacts = (factsArr) => {
	let i = 0;

  while (factsArr[i]) {
		factsArr[i] += "!!!";
    i++;
  }

  return factsArr;
}

const iLoveTheBeatles = (num) => {
  let emptyArr = [];

	do {
		emptyArr.push('I love the Beatles!');
		num++
	} while ( num < 15 )

	return emptyArr;
}
