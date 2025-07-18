// WORKOUT BUILDER APP

// html variables
const submitExButton = document.getElementById("addButton");
const deleteRowBtn = document.getElementsByClassName("deleteBtn");
const editRowBtn = document.getElementsByClassName("editBtn");
const clearCurrentWorkoutBtn = document.getElementById("clearCurrentWorkoutBtn");
const saveAsButton = document.getElementById("saveAsButton");
const templateSection = document.getElementById('templateSection')
const clearAllTemplatesBtn = document.getElementById('clearAllTemplates')

/* filepath: /Users/matt.warne/Desktop/WebProjects/Optex/script.js */
// Add this near the top of your script.js file
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
updateThemeUI(savedTheme === 'dark');

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
});

function updateThemeUI(isDark) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// stores all exercises
let exercises = JSON.parse(localStorage.getItem("Exercises")) || [];


function addExerciseRow() {

   //Add row to the table

   const exInput = document.getElementById("exercise").value;
   const repsInput = document.getElementById("reps").value;
   const setsInput = document.getElementById("sets").value;

   const table = document.getElementById("workoutTable");
   const rowId = Date.now();

   if (exInput === "" || repsInput === "" || setsInput === "" || repsInput <= 0 || setsInput <= 0) {
      alert("Please complete all fields and resubmit")
   } else {

      const newRow = table.insertRow(-1);
      newRow.id = rowId;

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

      console.log(`new row added. Row ID:${rowId}. Row details: ${exerciseObj}.`)
   }
};

submitExButton.addEventListener("click", addExerciseRow);

function renderCurrentWorkout(arr) {
   const table = document.getElementById("workoutTable");
   // might have to re-enable/uncomment below
   // exercises = JSON.parse(localStorage.getItem("Exercises")) || [];

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
      cell4.innerHTML = `<button id="editBtn">Edit</button> | <button class="deleteBtn">Delete</button>`
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
   const currentWorkoutTitle = document.getElementById('currentWorkoutTitle')
   currentWorkoutTitle.textContent = "My Workout"
   clearCurrentWorkoutBtn = "Clear Workout"
   localStorage.removeItem("Exercises");
}

clearCurrentWorkoutBtn.addEventListener("click", clearCurrentWorkout);

function saveAsTemplate() {
   // Change templateNameForm to templateName
   const templateName = document.getElementById("templateName").value;
   const table = document.getElementById('workoutTable');
   const tableRow = table.rows;
   const templateSection = document.getElementById('templateSection')

   if(templateName === ""){
      alert("You must give this workout a name.")
   } else {

   const savedWorkout = {
      template: templateName,
      savedExercises: exercises
   }

   console.log(savedWorkout);

   const stringifiedWorkoutTemplate = JSON.stringify(savedWorkout);

   localStorage.setItem(`template: ${templateName}`, stringifiedWorkoutTemplate);


   for (let i = tableRow.length - 1; i >= 0; i--) {
      const row = tableRow[i];

      // Check if the row contains any <th> (header) cells, skip it
      if (row.querySelector('th')) continue;

      table.deleteRow(i);
   }

   localStorage.removeItem("Exercises");
   exercises.length = 0;
   window.location.reload()}
}


saveAsButton.addEventListener("click", saveAsTemplate);



function renderAllTemplates() {
   // loop through local.storage items
   for (let i = 0; i < localStorage.length; i++) {

      // define key to check value of [key] in the loop
      const key = localStorage.key(i);

      // if the key starts with "blah" then create the element using the values 
      if (key.startsWith("template:")) {

         let templateSection = document.getElementById('templateSection')
         let templateCardContent = document.createElement('div');
         templateSection.appendChild(templateCardContent);
         const templateData = JSON.parse(localStorage.getItem(key));
         const templateName = templateData.template;
         // Create + append card with templateName

         templateCardContent.innerHTML = `
   <div class="workoutCard" data-template="${templateName}">
      <h3 class="workoutTitle">${templateName}</h3>
      <p class="workoutText">Saved workout template</p>
      <div class="workoutCardButtons">
         <button class="openWorkoutBtn">Open</button>
         <button class="deleteWorkoutBtn">Delete</button>
      </div>
   </div>`
      }
   }
}

renderAllTemplates()

// action on workout templates

function deleteWorkout(templateName){
const storageKey = `template:${templateName}`;
localStorage.removeItem(storageKey);
}

document.getElementById('templateSection').addEventListener('click', function(event) {
   // get the parent element and add an event listener - the listener is triggered on a click and it then executes a function below
  if (event.target.classList.contains('deleteWorkoutBtn')) {
   // add event listener to the deleteWorkoutBtn
      const parentCard = event.target.closest(".workoutCard");
      // create variable for the workoutCard class elements
      const templateName = parentCard.getAttribute("data-template");
      // get the templateName from the data template attribute
      deleteWorkout(templateName);
      // delete the workout that has the specified templateeName
      parentCard.remove();
      //remove the workoutCard from the DOM
      console.log(`${templateName} has been removed from storage.`);
  }
});

function openSavedWorkout(templateName) {
   const currentWorkoutTitle = document.getElementById('currentWorkoutTitle')
   const key = `template: ${templateName}`;
   const workout = JSON.parse(localStorage.getItem(key));
   retrievedExercises = workout.savedExercises;
   currentWorkoutTitle.textContent=templateName;
   clearCurrentWorkoutBtn.textContent = "Close Workout"
   renderCurrentWorkout(retrievedExercises);
   }

document.getElementById('templateSection').addEventListener('click', function(event){
   if (event.target.classList.contains('openWorkoutBtn')){
      const parentCard = event.target.closest(".workoutCard");
      // create variable for the workoutCard class elements
      const templateName = parentCard.getAttribute("data-template");
      // get the templateName from the data template attribute
      openSavedWorkout(templateName);
      console.log("clicked openWorkoutBtn");
   }
});

function deleteAllTemplates () {
   const confirmation = prompt("To delete ALL saved workouts, type 'YES' ");

   if (confirmation === "YES") {
      const keysToDelete = [];

      // First, collect keys to avoid modifying localStorage during iteration
      for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i);
         if (key && key.startsWith("template:")) {
            keysToDelete.push(key);
         }
      }

      // Now delete them
      keysToDelete.forEach(key => localStorage.removeItem(key));

      alert("All saved workouts have been deleted");
      window.location.reload();
   } else {
      alert("Okay, nothing has been deleted");
   }
}


clearAllTemplatesBtn.addEventListener('click', deleteAllTemplates)
