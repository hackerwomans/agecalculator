//prompt returns a string!! --- coercion
var birthYear = prompt("What year were you born? " );
//console.log(typeof(birthYear));
var futureYear = prompt("What year would you like to know your age? ");

var age1 = Number(futureYear)-Number(birthYear);
var age2 = age1 - 1;
var message = ("You will be either "+age1+" or " +age2+ " years old in "+futureYear+".");

console.log(message);

console.log("AGE CALCULATOR");
