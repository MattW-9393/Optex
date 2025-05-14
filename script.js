// WORKOUT BUILDER APP

 // html variables


 const submitExButton = document.getElementById("addButton");

 const saveAsButton = document.getElementById("saveAsButton");

 const exercises = [];

function addExerciseRow (){

   const exInput = document.getElementById("exercise").value
   const repsInput  = document.getElementById("reps").value
   const setsInput = document.getElementById("sets").value
   const rmRowBtn = document.getElementById("rmRowBtn")

   const table = document.getElementById("workoutTable");
   const rowIdNum = table.rows.length 
   const newRow = table.insertRow(-1)
   newRow.id = rowIdNum

   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(1);
   const cell3 = newRow.insertCell(2);
   const cell4 = newRow.insertCell(3)
  
   cell1.textContent = exInput;
   cell2.textContent = repsInput;
   cell3.textContent = setsInput;

   // add button for row removal
   cell4.innerHTML = rmRowBtn.innerHTML= "<button type='button' id='rmRowBtn'>X</button>"

   console.log(`new row added. Row ID:${rowIdNum}`)

}

function saveAsTemplate (){
   const savedExercises = []
   

}