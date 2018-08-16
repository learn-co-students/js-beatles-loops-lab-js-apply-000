
musicians = ["Spongebob", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 
//1. For Loop
    function theBeatlesPlay(musicians, instruments) 
    {
      var Combo = [];
      var i = 0;
      
      for (i = 0; i < musicians.length; i++)
      {
        Combo.push(musicians[i] + " plays " + instruments[i]);
        console.log("/n");
      }
      return Combo;
    }




//2. While Function
    var facts = 
        [
          "He was the last Beatle to learn to drive",
          "He was never a vegetarian",
          "He was a choir boy and boy scout",
          "He hated the sound of his own voice"
        ];

    function johnLennonFacts(facts) 
    {
      var newFacts = [];
      
      var i = 0;
      while(i < facts.length) {
        newFacts.push(facts[i] + "!!!");
        i++;
      }
      
      return newFacts;
    }



//3. Do/While Function
    function iLoveTheBeatles(n)
    {
     var emptyArray = [];
     if (n < 15) 
     var i = 0;
     {
       do
       {
         emptyArray.push("I love the Beatles!");  
         i ++;
       } 
       while (i <= n);   
     }
    return emptyArray;
    }








