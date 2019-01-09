function theBeatlesPlay(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i] + " plays " + arr2[i]);
  }
  return output;
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i < arr.length) {
    arr[i] += "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
	let arr =[];
	if (num < 15) {
    	do {
        	arr.push("I love the Beatles!")
        	num--;
    	}
    	while (num >= 0);
	} else {
		return ["I love the Beatles!"];
	}
	return arr;
}