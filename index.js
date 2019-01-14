
// add solution here

function theBeatlesPlay(musicians,instruments)
{
  var heplays = []
  for (let i=0; i<musicians.length; i++)
  {
    heplays.push(musicians[i]+" plays "+instruments[i])
  }
  return heplays
}

function johnLennonFacts(facts)
{
  var johnfacts = []
  var i=0
  while (i<facts.length)
  {
    johnfacts.push(facts[i]+"!!!")
  i++
  }
  return johnfacts
}

function iLoveTheBeatles(num)
{
 var love = []
 let i=0
 do
 {
   love.push("I love the Beatles!")
   i++
 }
 while (i<=num && num<17)
 return love
}
