# 🧹 Refactor Checklist: OptEx Workout Builder

A structured guide to improve code clarity, maintainability, and reliability.

---

## 🔁 1. Normalize Your Data Structure
- [✅ ] Save templates as objects `{ name: "...", exercises: [...] }`
- [ ✅] Remove pushing `templateName` into the `exercises` array
- [ ] Ensure all saved data is consistently shaped for easier parsing and rendering

---

## 📦 2. Clean Up Variable Scope
- [✅ ] Remove duplicate or shadowed variables (e.g. `workoutExercises`)
- [✅ ] Use only **one** declaration of `exercises` — ideally global or managed with a shared state object
- [ ] Pass data into functions as parameters instead of re-parsing `localStorage` internally

---

## 🧠 3. Fix Button Logic and Event Handling
- [ ] Remove all unused or broken button references (e.g. `openWorkoutBtn`)
- [ ] Fully switch to **event delegation** for any dynamically added buttons
- [ ] Add functionality to the **Edit** and **Delete** buttons, or remove them until implemented

---

## 📋 4. Improve Table Rendering Logic
- [✅ ] Remove the hard-coded placeholder row from your HTML
- [ ] Ensure `renderCurrentWorkout()` only renders valid `exercises` entries
- [ ] Consider clearing and restoring the `exercises` array before/after rendering

---

## ♻️ 5. Implement Rehydration on Page Load
- [ ] On load, loop through `localStorage` and render all saved templates
- [ ] Optionally, rehydrate the `"Exercises"` session if it exists

---

## 🧼 6. Polish Naming and Style
- [ ] Fix all typos in class names (e.g. `workourCardBtn` → `workoutCardBtn`)
- [ ] Standardize ID and class naming (`camelCase` or `kebab-case`, not both)
- [ ✅] Use consistent semicolons, indentation, and spacing

---

## 🛠 7. Simplify DOM Manipulation
- [ ] Separate logic for generating card HTML into a reusable function
- [ ] Do not embed inline event handlers (`onClick=...`)
- [ ] Minimize direct `.innerHTML = ...` where possible — prefer `createElement` + `appendChild`

---

## 🧪 8. Add Defensive Coding and Feedback
- [ ] Add checks before parsing `localStorage` content (e.g. validate JSON and structure)
- [ ] Alert or visually notify the user if a template is missing or corrupt
- [ ] Show a message like “No templates found” if `localStorage` is empty

---

## 🧰 9. Optional Stretch Improvements
- [ ] Add `dateCreated` or `category` to each saved template
- [ ] Allow users to rename or delete templates
- [ ] Sort templates alphabetically or by date
- [ ] Add visual styles (card colors, exercise icons, hover states)

---

## 🧭 Suggested Refactor Order (Priority)
1. Fix scoping and duplicate variables
2. Normalize data structure
3. Replace hardcoded placeholder rows
4. Implement safe render and rehydration on load
5. Clean up button event handling
6. Tidy naming and formatting
git 