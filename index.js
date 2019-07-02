
// add solution here

var arr= [];
    

function theBeatlesPlay(musicians,instruments){
  
for (let i = 0; i < 4; i++) {
    arr.push(musicians[i] +" plays "+ instruments[i])

}
return arr;
}

function johnLennonFacts(string) 
{
    var i= 0;
    var jLFarr= [];
    
    while (i < string.length) 
    {
        jLFarr.push(string[i] + "!!!");
        i++;
    }
    return jLFarr;
}

function iLoveTheBeatles(number){
    var arr1 = [];
    var i = -1;
    do{
        i++;
        arr1.push("I love the Beatles!");
        
    }while (i <number && number != 17);
    return arr1;

}
