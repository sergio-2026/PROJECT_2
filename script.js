// When the DOM is ready, set up the page.
$(function() {
  // Called function to update the name, happiness, weight, and energy of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);

  // 4. Add a new action button 
  $('.nap-button').click(clickedNapButton);

  // Hide the comment area at first so our jQuery .fadeIn() visual notification is noticeable.
  $('.pet-comment').hide();
});


// 1. Create a pet_info object with keys "name", "weight", "happiness" and set initial values. Set this equal to variable "pet_info" 
var pet_info = {
  name: "Pixel",
  weight: 5,
  happiness: 5,
  // Extra property to support the new behavior for requirement 5
  energy: 5
};


function clickedTreatButton() {
  // 2. Add a behavior to button interaction. When your pet receives a treat, add to its happiness and weight.
  pet_info.happiness = pet_info.happiness + 2;
  pet_info.weight = pet_info.weight + 1;

  // 6. Add a visual notification after each button press with a comment from your pet. For this requirement you can not use console.log() or alert(). 
  showPetComment("Yum! Thanks for the treat!");

  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // 2. Add a behavior to button interaction. When your pet plays, add to its happiness and reduce its weight 
  pet_info.happiness = pet_info.happiness + 2;
  pet_info.weight = pet_info.weight - 1;

  showPetComment("That was fun! Let's play again!");

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // 2. Add a behavior to button interaction. When your pet exercises, reduce its happiness and weight. 
  pet_info.happiness = pet_info.happiness - 1;
  pet_info.weight = pet_info.weight - 2;

  showPetComment("Phew... exercise is hard work!");

  checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  // 5. Add a new behavior that correlates with the new button you added. You can add it below the happiness text in the html 
  // When the pet takes a nap, we increase its energy and happiness a little bit.
  pet_info.energy = pet_info.energy + 2;
  pet_info.happiness = pet_info.happiness + 1;

  showPetComment("Zzz... that nap felt great!");

  checkAndUpdatePetInfoInHtml();
}


function checkAndUpdatePetInfoInHtml() {
  // 3.  Fix key bugs to make sure certain key values can't go below zero. (can use conditional) 
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }

  updatePetInfoInHtml();
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.energy').text(pet_info['energy']);
}


// 6. Add a visual notification after each button press with a comment from your pet. For this requirement you can not use console.log() or alert(). 
function showPetComment(message) {

  // 7. Review jQuery documentation. Sign up for two unique methods (not discussed in class and in starter code) and use it in your project. 
  // 8. Provide comments fully explaining how the methods are used. 

  // First we set the text of the comment area using .text(),
  // which was already used in the starter code to update other spans.
  $('.pet-comment').text(message);

  // New jQuery method #1: .fadeIn()
  // .fadeIn(200) is a jQuery effect method from the official documentation.
  // It gradually changes the .pet-comment element from hidden (display: none) to visible
  // over 200 milliseconds so the pet's comment appears as a visual notification.
  $('.pet-comment').fadeIn(200);

  // New jQuery method #2: .addClass()
  // .addClass('highlight') is another jQuery method from the documentation.
  // It adds the CSS class "highlight" to the .pet-comment element so the text is bold
  // and colored, making the pet's message stand out after each button press.
  $('.pet-comment').addClass('highlight');
}