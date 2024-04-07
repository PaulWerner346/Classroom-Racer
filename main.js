// Fetch classroom data from classrooms.json
let classrooms = [];
fetch('classrooms.json')
    .then(response => response.json())
    .then(data => classrooms = data.classrooms);

// Add event listener to the "Start Game" button
document.getElementById('startGame').addEventListener('click', function() {
    // Ask the user to select a classroom and the number of levels
    let classroomName = prompt("Enter the classroom name:");
    let levels = prompt("Enter the number of levels:");

    // Start the game with the selected classroom and levels
    startGame(classroomName, levels);
});

// Add event listener to the "Add Classroom" button
document.getElementById('addClassroom').addEventListener('click', function() {
    // Ask the user for the classroom name and the names of the pupils
    let classroomName = prompt("Enter the classroom name:");
    let pupilNames = prompt("Enter the names of the pupils (separated by commas):");

    // Add the new classroom to classrooms.json
    addClassroom(classroomName, pupilNames.split(','));
});

// Function to start the game
function startGame(classroomName, levels) {
    // Logic to start the game
}

// Function to add a classroom
function addClassroom(classroomName, pupilNames) {
    // Logic to add a classroom
}
