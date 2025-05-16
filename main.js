
//prompt and alert strings in Swedish because of using my kids as test subjects

const random = Math.floor(Math.random() * 10) + 1;
let guess;
let correctAnswer;


while (!correctAnswer) {
    guess = parseFloat(prompt("Gissa ett nummer mellan 1-10!"));
    if (guess === random) {
        correctAnswer = true;
        console.log("Du gissade rätt! Woho!");
    } else if (guess < random) {
        alert("Inte helt rätt! Prova ett högre nummer!");
    } else {
        alert("Inte helt rätt! Prova ett lägre nummer!");
    }
}