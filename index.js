// add solution here


function theBeatlesPlay(mus, instru){
  let l=mus.length;
  let k= [];
  for (let counter=0; counter<l; counter++){
    k.push( 'name plays instru'.replace('name', mus[counter]).replace('instru', instru[counter]))
    console.log(k)
  }
  return k 
}


var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
theBeatlesPlay(musicians, instruments)

function johnLennonFacts(arr){
  let l = arr.length; 
  let counter = 0;
  while (counter< l){
    arr[counter]=arr[counter]+'!!!'
    counter++
  }
  return arr
}




    
    
function iLoveTheBeatles(num){
  let k=[];
  let i = num;

  do {
  i = i + 1;
  k.push('I love the Beatles!')

  } while (i < 15);
  return k 
}
