# Workout Builder Enhancements  

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
