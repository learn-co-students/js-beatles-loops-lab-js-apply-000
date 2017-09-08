

function theBeatlesPlay(dogs,cats){
  var new_array = [] //["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "", ""]
  for (let i = 0; i < dogs.length; i++) { //REVIE-W FOR LOOP
    var str = `${dogs[i]} plays ${cats[i]}`       //REVIEW STRING INTERPOLATION          //"John Lennon plays Guitar"
    new_array.push(str)



    //thing = stuff
    //return thing

    //return stuff
  }
  return new_array
}

function johnLennonFacts (facts) {
  let i =0
  while (i<facts.length) {
  facts[i] = `${facts[i]}!!!`
  // facts.push(factstwo)
  i++
}
  return facts
}

function iLoveTheBeatles(number){
  var empty_array = []
  do {
      empty_array.push("I love the Beatles!");
      number++;
  }
  while (number < 15);
  return empty_array
}

// number = 3
