let username = prompt('What is you name?');
let age = prompt('How old are you?');
let place = prompt('Where would you like to travel?');

alert('Nice to meet you ' + username +'! ' + age + ' is a great age:) I would also love to go to ' + place + '!');

let x = prompt('Do you want to use my calculator? Enter the first number to multiply!');
let y = prompt('Enter the second number!');
let calculate = x * y;
alert(calculate);

let answer =prompt('Are you going on vacation soon?');
if(answer === "Yes" || "yes") {
    alert("Wooo hooo!:)")
}
else {
    alert("Maybe soon!")
}