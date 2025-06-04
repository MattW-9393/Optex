# 🏋️‍♂️ OptEx | Workout Builder App

**Build. Save. Optimize.**  
A simple and interactive workout builder that lets you customize exercises, sets, and reps — and save them as reusable templates!

---

## 📋 Features

✅ **Dynamic Workout Builder**  
- Add exercises with sets and reps to build your session  
- View everything in a clean, interactive table

💾 **Save Workout Templates**  
- Save a workout and give it a custom name via a prompt  
- Templates are stored for easy reuse

📂 **Template Library (Coming Soon)**  
- View all saved workouts on a dedicated Templates page  
- Generate a workout table based on the selected template

---

## 🧠 How It Works (High-Level)

1. **Data Capture**  
   - Inputs from the form are read and added as a new row in the table  
   - These rows are converted into structured arrays for storage

2. **Saving Workouts**  
   - When the user clicks **"Save Workout"**, they're prompted to enter a name  
   - The workout table rows are mapped into a structured template and saved

3. **Using Templates (Future Page)**  
   - A separate page will list all saved templates  
   - Clicking a template button will regenerate the workout table using DOM manipulation

---

## 💡 Dev Notes

- Current storage is **in-memory** only (use `localStorage` for persistence)
- Data structure design is ongoing (e.g., using `{ name: "Upper Body", data: [...] }`)
- You’re encouraged to separate logic for DOM rendering vs. data handling

---

## 🚀 Future Enhancements

- 🧠 Persistent storage using `localStorage` or IndexedDB  
- 🧾 Ability to edit or delete saved templates  
- 📱 Responsive layout for mobile devices  
- ⏱ Timer or rest suggestions between sets

---

## 👨‍💻 Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla)  

---

## 📸 Screenshots (Coming Soon)

> Show off your UI here!

---

## 🙌 Credits

Built with 💪 by a dev on a journey to master JavaScript — one workout at a time!

---
