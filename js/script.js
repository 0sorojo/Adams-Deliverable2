let vacationType = "";
let lowerCaseVacationType = "";
let destination;
let groupSize;
let via;
let result;


vacationType = prompt("Hi! So glad you could stop by. I'm here to help with your vacation plans. What kind of vacation theme are you interested in:\n \nMusical, Tropical, or Adventurous? \n \nPlease type your answer below...");
lowerCaseVacationType = vacationType.toLowerCase();

while (!~["musical", "tropical", "adventurous"].indexOf(lowerCaseVacationType)) {
    vacationType = prompt("I apologize... I should have been more specific: please choose from:\n\nMusical \n\nTropical \n\nAdventurous \n\nthen type the word into the box, checking for spelling");
    lowerCaseVacationType = vacationType.toLowerCase();
}

groupSize = prompt("Interesting! Wow, that's a cool choice! \nHow many people will be traveling...including yoursel?");

while ((groupSize != parseInt(groupSize)) || (groupSize <= 0)) { 
    groupSize = prompt("Thanks for that, but I need the NUMBER of people. like 1 or 2 or 15");
}

if (lowerCaseVacationType === "musical") {
    destination = "to New Orleans";
} else if (lowerCaseVacationType === "tropical") {
    destination = "on a Beach Vacation in Mexico";
} else if (lowerCaseVacationType === "adventurous") {
    destination = "White Water Rafting in the Grand Canyon!!";
}

if (groupSize <= 2) {
    via = "First Class";
} else if (groupSize > 2 && groupSize <= 5) {
    via = "Helipcopter";
} else if (groupSize > 5) {
    via = "Charter Flight";
}

result = "I think that if you are looking for a " + vacationType + " theme, I would suggest you go " + destination + ". \n\nNow lets think about transportation...\n\nhmmm...weelll, since you have " + groupSize + " people going, I'd suggest going by " + via + ".";

console.log(result);






