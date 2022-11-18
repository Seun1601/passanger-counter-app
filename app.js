  let count = document.getElementById("counter");
  let add = document.getElementById("increase");
  console.log("God abeg");
  let keep = document.getElementById("keep")
  let restart = document.getElementById("reset")
  let people = 0;
  //let previous = "12 -"
  function Increment(){
    people += 1;
    count.innerText = people;
    
  }
  count.innerText = people;
 
  
  function addEntry(){
     keep.innerText +=  " " + people + " - ";
  }
 restart.addEventListener("click", clear);

  function clear(){
    keep.innerText = "Previous entries: ";
    count.innerText = 0;
    people = 0;
    console.log("God pleaseeeeeeeee");
  }

 