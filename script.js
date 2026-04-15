// Wait for the page HTML to be ready.
$(function () {
  // Show the starting stats when the page first loads.
  checkAndUpdatePetInfoInHtml();

  // Hook up each button to its function.
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".nap-button").click(clickedNapButton);

  // Hide the comment at first so the visual effect is easier to see.
  $(".pet-comment").hide();
});

// 1 Create a pet_info object with keys "name", "weight", "happiness" and set initial values.
//   Set this equal to variable "pet_info"
var pet_info = {
  name: "Mr Bean",
  weight: 10,
  happiness: 10,
  energy: 10
};

// 2 Add a behavior to button interaction. 
// When your pet receives a treat, add to its happiness and weight. 
// When your pet exercises, reduce its happiness and weight. 
// When your pet plays, add to its happiness and reduce its weight
function clickedTreatButton() {
  pet_info.happiness = pet_info.happiness + 2;
  pet_info.weight = pet_info.weight + 1;
  pet_info.energy = pet_info.energy + 1;
  //if i overfeed the pes, it gains too much weight and becomes less happy
  if (pet_info.weight > 15) 
    { pet_info.happiness = pet_info.happiness - 3; }  
  //if i overfeed the pes, it gains too much weight and has less energt
  if (pet_info.weight > 15) 
    { pet_info.energy = pet_info.energy - 2; }  
  showPetComment("Yum! Thanks for the treat!");
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info.happiness = pet_info.happiness + 2;
  pet_info.weight = pet_info.weight - 1;
  pet_info.energy = pet_info.energy - 1;
  showPetComment("That was fun! Let's play again!");
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  pet_info.happiness = pet_info.happiness - 1;
  pet_info.weight = pet_info.weight - 2;
  pet_info.energy = pet_info.energy - 2;

  showPetComment("Phew... exercise is hard work!");
  checkAndUpdatePetInfoInHtml();
}

// 5 Add a new behavior that correlates with the new button you added. You can add it below
//the happiness button
function clickedNapButton() {
  // A nap gives the pet more energy and a little more happiness.
  pet_info.energy = pet_info.energy + 3;
  pet_info.happiness = pet_info.happiness + 1;

  showPetComment("Zzz... that nap felt great!");
  checkAndUpdatePetInfoInHtml();
}

// 3 Fix key bugs to make sure certain key values can't go below zero. (can use conditional)
function checkAndUpdatePetInfoInHtml() {
  if (pet_info.weight < 3) {
    pet_info.weight = 3;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }

  updatePetInfoInHtml();
}

// Updates the HTML with the current values in the pet_info object.
function updatePetInfoInHtml() {
  $(".name").text(pet_info.name);
  $(".weight").text(pet_info.weight);
  $(".happiness").text(pet_info.happiness);
  $(".energy").text(pet_info.energy);

  // Simple happy / normal / tired image swap based on happiness.
  if (pet_info.happiness < 5 || pet_info.energy <= 0 || pet_info.weight <= 3) {
    $(".pet-image").attr("src", "images/dog-dead.png");
  } else if (pet_info.happiness <= 9) {
    $(".pet-image").attr("src", "images/dog-sad.png");
  } else if (pet_info.happiness >= 15) {
    $(".pet-image").attr("src", "images/dog-very-happy.png");
  } else {
    $(".pet-image").attr("src", "images/dog-happy.png");
  }

}

// 6 Add a visual notification after each button press with a comment from your pet. For this requirement you can not use console.log() or alert().
function showPetComment(message) {
  // Put the new message into the comment paragraph.
  $(".pet-comment").text(message);

  // 7 Review jQuery documentation. Sign up for two unique methods (not discussed in class and in starter code) and use it in your project. Provide comments fully explaining how themethods are used.

  // New jQuery method #1: .fadeIn()
  // .fadeIn(200) slowly shows the .pet-comment over 0.2 seconds, so
  // the message appears as a smooth visual effect instead of popping in.
  $(".pet-comment").fadeIn(200);

  // New jQuery method #2: .addClass()
  // .addClass("highlight") adds a CSS class that makes the text bold and blue.
  // This helps the pet's comment stand out under the stats.
  $(".pet-comment").addClass("highlight");
}

// 9 Add animations and/or sound effects to your pet when certain conditions occur.
function animatePetIfNeeded() {
  // If the pet is very happy or has no energy, we give a quick blink animation.
  if (pet_info.happiness >= 10 || pet_info.energy === 0) {
    // fadeOut then fadeIn makes the image blink one time.
    $(".pet-image").fadeOut(150).fadeIn(150);
  }
}