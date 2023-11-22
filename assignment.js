const weight = prompt("What is Your Weight (in Kg) : ");
const height = prompt("What is Your Height (in M)");

let bmi = weight / (height * height);

alert("Your Body Mass Index is :- " + bmi);

if (bmi <= 18) {
  alert("Yooooo, You're Under Weight !");
} else if (bmi >= 19 && bmi <= 24) {
  alert("Congratulations, You're Healthy ^_^ !");
} else if (bmi >= 25 && bmi <= 29) {
  alert("Yoooo, You're OverWeight !");
} else if (bmi > 29) {
  alert("MTSMMM, You're Obese !");
}
