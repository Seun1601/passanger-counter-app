  let count = document.getElementById("counter");
  let add = document.getElementById("increase");
  console.log("God abeg");
  let keep = document.getElementById("keep")
  let restart = document.getElementById("reset")
  let people = 0;
  //let previous = "12 -"
  function Increment(){
    people += 1;
    count.textContent = people;
    
  }
  count.textContent = people;
 
  
  function addEntry(){
     keep.textContent +=  " " + people + " - ";
     count.textContent = "0"
     people = 0;
  }
 restart.addEventListener("click", clear);

  function clear(){
    keep.textContent = "Previous entries: ";
    count.textContent = 0;
    people = 0;
    console.log("God pleaseeeeeeeee");
  }

 