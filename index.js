function theBeatlesPlay(musicians, instruments) //function that accepts 2 arrays
{
  var beatlesArray = {}
  for(let i = 0; i < musicians.length; i ++)
  {
    var beatleString = musicians[i] + " plays " + instruments[i] //creates a string for each musician and there respective instrument
    beatlesArray = [...beatlesArray, beatleString] // adds the string to the array beatlesArray
  }
  return beatlesArray  // returns the beatlesArray after every string has been returned
}

function johnLennonFacts(facts) // function that accepts a single array. modifies the strings in the array with "!!!" at the end and returns a new array
{
  var jLennonArray = {} //blank array which will contain the new array with the modified strings
  var i = 0
  while (i < facts.length)
  {
    var jLennonString = facts[i] + "!!!" // creates a new string based on each string in the previous array
    i++
    jLennonArray = [...jLennonArray, jLennonString] //adds the new strings into blank array that was created above
  }
  return jLennonArray
}

function iLoveTheBeatles(n)
{
  var loveArray = {}
  do
  {
    loveArray = [...loveArray, "I love the Beatles!"]
    n++
  }while(n < 15)
  return loveArray
}
