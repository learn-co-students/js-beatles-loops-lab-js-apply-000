function theBeatlesPlay(musicians, instruments)
{
  var concatStrings = [];
  for(var i = 0; i < musicians.length; ++i)
  {
    concatStrings[i] = musicians[i] + " plays " + instruments[i];
  }
  return concatStrings;
}

function johnLennonFacts(args)
{
  var index = 0;
  while(index < args.length)
  {
    args[index] += "!!!";
    ++index;
  }
  return args;
}

function iLoveTheBeatles(num)
{
    var strings = [];
    if(num > 15)
      strings[0] = "I love the Beatles!";
    else
    {
      do {
        strings[strings.length] = "I love the Beatles!";
        --num;
    } while (num >= 0);
}

  return strings;
}
