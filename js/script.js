let vacationType = "";
let lowerCaseVacationType = "";
let groupSize;
let result;
let destination;
let via;

vacationType = prompt("Hi! So glad you could stop by. I'm here to help with your vacation plans. What kind of vacation theme are you interested in: Musical, Tropical, or Adventurous? \n Please type your answer below...");
lowerCaseVacationType = vacationType.toLowerCase();

while (!~["musical", "tropical", "adventurous"].indexOf(lowerCaseVacationType)) {
    vacationType = prompt("I apologize... I should have been more specific: please choose from: Musical, Tropical, or Adventurous and type the word into the box checking for spelling");
    lowerCaseVacationType = vacationType.toLowerCase();
}

groupSize = prompt("Interesting! Wow, that's a cool choice. \n How many people do you think you'll travel with?");

while (groupSize != parseInt(groupSize)) { 
    groupSize = prompt("Thanks for that but I need the number of people. like 1 or 2 or 15");
}

if (lowerCaseVacationType === "musical") {
    destination = "to New Orleans";
} else if (lowerCaseVacationType === "tropical") {
    destination = "to a Beach Vacation in Mexico";
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

result = "I think that if you are looking for a " + vacationType + " theme, I would suggest you go " + destination + ". \n Now for transportation...hmmm...well since you have " + groupSize + " people going, I'd suggest going by " + via;

console.log(result);






