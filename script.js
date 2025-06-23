// WORKOUT BUILDER APP

 // html variables


const submitExButton = document.getElementById("addButton");

const saveAsButton = document.getElementById("saveAsButton");

const exercises = [];

const rowIdNum = 0

function addExerciseRow (){

   //Add row to the table

   const exInput = document.getElementById("exercise").value;
   const repsInput  = document.getElementById("reps").value;
   const setsInput = document.getElementById("sets").value;
   const rmRowBtn = document.getElementById("rmRowBtn");



   const table = document.getElementById("workoutTable");
   const rowIdNum = table.rows.length; 
   const newRow = table.insertRow(-1);
   newRow.id = rowIdNum;

   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(1);
   const cell3 = newRow.insertCell(2);
   const cell4 = newRow.insertCell(3)
  
   cell1.textContent = exInput;
   cell2.textContent = repsInput;
   cell3.textContent = setsInput;

   // add button for row removal
   cell4.innerHTML = rmRowBtn.innerHTML= "<button type='button' id='rmRowBtn'>X</button>";

   // array to store all exercices


   // Push exercises to array for saving in memory
   const exerciseName = exInput
   const repsVal = repsInput
   const setsVal = setsInput

   exercises.push([exerciseName, repsVal, setsVal]);

   console.log(`new row added. Row ID:${rowIdNum}. Row details: ${exercises}.`)
   
}

submitExButton.addEventListener("click", addExerciseRow);

function saveAsTemplate (){
   const templateName = document.getElementById("templateNameForm").value;
   const table = document.getElementById('workoutTable');
   const tableRow = table.rows;
   const workoutExercises = [];

   exercises.forEach((exercise) => {
   workoutExercises.push(exercise);
   });
   workoutExercises.push(templateName);
   alert(`Template "${templateName}" has been saved successfully!`);
   // Reset the exercises array after saving
   exercises.length = 0;
   // Clear the table
   while (table.rows.length > 1) {
       table.deleteRow(1);
   }
   // Clear the template name input field
   document.getElementById("templateNameForm").value = '';
   // Reset the row ID number
   rowIdNum = 0;
   // Optionally, you can reset the input fields for exercise, reps, and sets
   document.getElementById("exercise").value = '';
   document.getElementById("reps").value = '';
   document.getElementById("sets").value = '';
   console.log(`Template "${templateName}" has been saved and the form has been reset.`);
   const stringifiedTemplates = JSON.stringify(workoutExercises);
   localStorage.setItem("Saved Workout", stringifiedTemplates);
}

saveAsButton.addEventListener("click", saveAsTemplate);

