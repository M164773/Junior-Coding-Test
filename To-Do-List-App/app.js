// Requiring readline to store user's input in the console.
const readline = require("readline");

// Setting up the readline inside a constant.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variables to be used throughout the program.
let tasks = [];
let time = 1000; //Specifies the delay.

function showMenu() {
  // This is the menu with 5 options to choose.
  console.log("\n==== To-Do List App ====");
  console.log("1. Add a task.");
  console.log("2. View all tasks.");
  console.log("3. Mark task as complete.");
  console.log("4. Delete a task.");
  console.log("5. Exit.");

  // Storing user's choice to navigate inside the menu.
  rl.question("\nChoose an option: ", (choice) => {
    // Calling this function to handle choice.
    handleChoice(choice);
  });
}

function timeout(message) {
  // Printing a message before adding a delay and finally showing the menu.
  console.log(message);
  setTimeout(() => {
    showMenu();
  }, time);
  // This improves a bit the user experience.
}

function addTask() {
  // Asking for the task's title. Status is pending by default.
  rl.question("\nEnter the task's title: ", (task) => {
    // Checking if it's empty or if it only has whitespaces.
    if (task.replace(/\s/g, "").length === 0) {
      timeout("The title can't be empty. Returning to menu...");
    } else {
      tasks.push([task, false]);
      timeout("Task added! Returning to menu...");
    }
    // If not then push the task inside the tasks' array.
  });
}

function viewTasks() {
  // Looping through the tasks' values to print each one of them.
  for (let i = 0; i < tasks.length; i++) {
    // Depending if the task has been completed, print with or without an X mark.
    if (tasks[i][1] === false) console.log(i + 1 + ". [] " + tasks[i][0]);
    else console.log(i + 1 + ". [X] " + tasks[i][0]);
  }
  timeout("A total of " + tasks.length + " task(s) shown.");
}

function completeTask() {
  // Storing the number of the task.
  rl.question("\nEnter the task's number: ", (task) => {
    // Substracting it to get the index of the array.
    task--;
    // Checking if such task exists or if it has been completed already.
    if (typeof tasks[task] === "undefined") {
      timeout("Number invalid. Returning to menu...");
    } else if (tasks[task][1] === true) {
      timeout("This task is already completed. Returning to menu...");
    } else {
      // Completing the task by changing the value to "true".
      tasks[task][1] = true;
      timeout("Task marked as complete! Returning to menu...");
    }
  });
}

function deleteTask() {
  // Asking for task's number.
  rl.question("\nEnter the task's number: ", (task) => {
    // Getting the array's index.
    task--;
    // If it doesn't exist, return to menu.
    if (typeof tasks[task] === "undefined") {
      timeout("Number invalid. Returning to menu...");
    } else {
      // Deleting only 1 value from the position in "task".
      tasks.splice(task, 1);
      timeout("Task deleted! Returning to menu...");
    }
  });
}

function handleChoice(choice) {
  // Managing user's choice with the help of a Switch and use cases.
  switch (choice.trim()) {
    case "1":
      // Calling function to add a task.
      addTask();
      break;
    case "2":
      // If there aren't any tasks in the array, return to the menu.
      if (tasks.length === 0) {
        timeout("\nNo task has been added yet. Returning to menu...");
      } else {
        viewTasks();
      }
      break;
    case "3":
      // No tasks, returns to the menu.
      if (tasks.length === 0) {
        timeout("\nNo task has been added yet. Returning to menu...");
      } else {
        // Calling function to show all tasks.
        completeTask();
      }
      break;
    case "4":
      // No tasks, return to menu.
      if (tasks.length === 0) {
        timeout("\nNo task has been added yet. Returning to menu...");
      } else {
        // Calling function to delete a task.
        deleteTask();
      }
      break;
    case "5":
      // Exits program with a delay.
      console.log("Exiting program...");
      setTimeout(() => {
        rl.close();
      }, time);
      break;
    default:
      // Default case where the choice doesn't match with any of the cases above.
      timeout("Invalid choice, enter a number from 1 to 5.");
  }
}

// Start the menu
showMenu();
