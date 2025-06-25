// WORKOUT BUILDER APP

 // html variables
const submitExButton = document.getElementById("addButton");
const clearCurrentWorkoutBtn = document.getElementById("clearCurrentWorkoutBtn")
const saveAsButton = document.getElementById("saveAsButton");

// stores all exercises
let exercises = JSON.parse(localStorage.getItem("Exercises")) || [];

function addExerciseRow (){

   //Add row to the table

   const exInput = document.getElementById("exercise").value;
   const repsInput  = document.getElementById("reps").value;
   const setsInput = document.getElementById("sets").value;

   const table = document.getElementById("workoutTable");
   const rowIdNum = table.rows.length; 
   const newRow = table.insertRow(-1);
   newRow.id = rowIdNum;

   const cell1 = newRow.insertCell(0);
   const cell2 = newRow.insertCell(1);
   const cell3 = newRow.insertCell(2);
   const cell4 = newRow.insertCell(3);
  
   cell1.textContent = exInput;
   cell2.textContent = repsInput;
   cell3.textContent = setsInput;
   cell4.innerHTML = `<button>Edit</button> | <button>Delete</button>`

   // create objects for each exercise

   const exerciseObj = {
      name: exInput,
      reps: repsInput,
      sets: setsInput
   };

   console.log(exerciseObj);


   // Push exercises to array for saving in memory
   const exerciseName = exInput
   const repsVal = repsInput
   const setsVal = setsInput

   exercises.push(exerciseObj);
   
   const stringifiedExercisesArray = JSON.stringify(exercises);
   localStorage.setItem("Exercises", stringifiedExercisesArray);

   console.log(`new row added. Row ID:${rowIdNum}. Row details: ${exerciseObj}.`) 
};

submitExButton.addEventListener("click", addExerciseRow);

function renderCurrentWorkout(arr){
   const table = document.getElementById("workoutTable");
   exercises = JSON.parse(localStorage.getItem("Exercises")) || [];
   
   const rows = table.rows;


	for (let i = rows.length - 1; i >= 0; i--) {
        	const row = rows[i];

        // Check if the row contains any <th> (header) cells, skip it
        	if (row.querySelector('th')) continue;

        	table.deleteRow(i);
	};

   arr.forEach(entry => {

      const row = table.insertRow(-1);
    	const cell1 = row.insertCell(0);
    	const cell2 = row.insertCell(1);
    	const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      cell1.textContent = entry.name;
      cell2.textContent = entry.reps;
      cell3.textContent = entry.sets;
      cell4.innerHTML = `<button>Edit</button> | <button>Delete</button>`
   });
};

renderCurrentWorkout(exercises);

function clearCurrentWorkout() {

   const table = document.getElementById("workoutTable");
   
   const rows = table.rows;


	for (let i = rows.length - 1; i >= 0; i--) {
        	const row = rows[i];

        // Check if the row contains any <th> (header) cells, skip it
        	if (row.querySelector('th')) continue;

        	table.deleteRow(i);
	};

   localStorage.removeItem("Exercises");
}

clearCurrentWorkoutBtn.addEventListener("click", clearCurrentWorkout);

function saveAsTemplate (){
   const templateName = document.getElementById("templateNameForm").value;
   const table = document.getElementById('workoutTable');
   const tableRow = table.rows;
   const workoutExercises = [];

   workoutExercises.push(templateName);
   exercises.forEach((exercise) => {
   workoutExercises.push(exercise);
   });
   console.log(`Following exercises have been saved as a template: ${workoutExercises}`);

   const stringifiedWorkoutTemplate = JSON.stringify(workoutExercises);

   localStorage.setItem(templateName, stringifiedWorkoutTemplate);


    for (let i = tableRow.length - 1; i >= 0; i--) {
        const row = tableRow[i];

        // Check if the row contains any <th> (header) cells, skip it
        if (row.querySelector('th')) continue;

        table.deleteRow(i);
    }

    localStorage.removeItem("Exercises");

}

saveAsButton.addEventListener("click", saveAsTemplate);
