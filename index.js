
// add solution here

  
/* const musicians = ;
    const instruments = ;*/
    
    
    
                function theBeatlesPlay(musicians, instruments) 
{         
              var free =[];

for (let i= 0; i < musicians.length;i++) {

  for ( let j = 0; j < instruments. length; j++){
    if (i === j){
  
   free.push (musicians[i] + " plays " + instruments[j]) ;
       }
          }

          }
          return free;   
   
           }
           
          
           
           theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]);
           
           
            function johnLennonFacts(facts){
             let name = [];
              let i = 0;
              while(i < facts.length){
                name.push (facts[i]+ '!!!');
                i++;
                
                }
              
              return name;
            }
           johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]);
        
        function iLoveTheBeatles(num){
          let info = 'I love the Beatles!';
          let newArray = [];
        
          do{ 
            console.log(newArray.push(info));
           // return (newArray);
            num++;
            
          }
            while (num < 15);
           return (newArray);
         // console.log(newArray.push(info));
        }
         num = 1;
        iLoveTheBeatles(7);
        
           