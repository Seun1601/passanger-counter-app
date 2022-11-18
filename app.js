  let count = document.getElementById("counter");
  let add = document.getElementById("increase");
  console.log("God abeg");
  let keep = document.getElementById("keep")
  let people = 0;
  let previous = " 12 "
  function Increment(){
    people += 1;
    count.innerText = people;
    
  }
  count.innerText = people;
 
  
  

 
  function addEntry(){
    previous =  previous + " - ";
    keep.innerText += previous;
  }

  addEntry();