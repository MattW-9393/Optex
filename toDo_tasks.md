#### OptEx ---> ToDo List

### 🔁 1. **Extract and Save Table Data**

* Loop through each row of the current workout table.
* Use `map()` or a similar method to extract exercise name, sets, and reps from each row.
* Store this row data in a structured format (like an array of objects).
* Push this structured workout into a larger array that holds all saved workouts.

---

### 💾 2. **Prompt for Workout Template Name**

* When the user chooses to save the workout:

  * Use `prompt()` or a form field to ask for a workout name.
  * Associate that name with the array of workout data (e.g. `{ name: "Leg Day", data: [...] }`).
  * Optionally show a confirmation with `alert()` to confirm the save.

---

### 📄 3. **Display Saved Templates on a Separate Page**

* On your templates page, iterate over all saved workouts.
* For each one, dynamically create a button labeled with the workout name.

---

### 🧱 4. **Render the Chosen Workout Template**

* When a user clicks one of the workout buttons:

  * Use DOM manipulation to build a new table based on the saved workout's data.
  * Populate the new table with rows for each exercise, just like the original one.

---

## Features to Add  

### 1. State Management with Array  
- Use an array to store workout exercises.  
- Each exercise can be an object with properties like `name`, `duration`, `reps`, etc.  
- Example:  
```javascript  
const workoutExercises = [  
    { name: "Push-ups", duration: "30s", reps: 15 },  
    { name: "Squats", duration: "45s", reps: 20 }  
];  
```  

### 2. Save as Template Button  
- Add a button labeled "Save as Template".  
- On click, prompt the user for a template name using `window.prompt()`.  
- Save the template name and workout array to local storage or a backend service.  
- Example:  
```javascript  
document.getElementById("saveTemplateButton").addEventListener("click", () => {  
    const templateName = prompt("Enter a name for your template:");  
    if (templateName) {  
        localStorage.setItem(templateName, JSON.stringify(workoutExercises));  
        alert("Template saved successfully!");  
    }  
});  
```  

### 3. Additional Suggestions  
- **Load Template Functionality**: Add a dropdown or button to load saved templates.  
- **Clear Workout Button**: Allow users to reset the workout builder to start fresh.  
- **Drag-and-Drop UI**: Enable drag-and-drop functionality to reorder exercises.  
- **Exercise Library**: Provide a list of predefined exercises for users to choose from.  
- **Timer Integration**: Add a timer to track exercise durations during workouts.  

### Example UI Layout  
```markdown  
- **Workout Builder**  
    - Add Exercise  
    - Save as Template  
    - Load Template  
    - Clear Workout  
    - Exercise List  
```  

### Notes  
Keep the UI simple and intuitive to ensure a clean user experience.  


