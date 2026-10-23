//chapter 6-9

// question 1

document.write("Result: <br><br>");

let a = 10;
document.write("The value of a is: " + a + "<br><br>");

++a;
document.write("The value of ++a is: " + a + "<br><br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br><br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br><br>");
document.write("Now value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br><br>");
a--;
document.write("Now value of a is: " + a + "<br><br>");

// question 2

var a1 = 2;
var b = 1;
var result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");

// question 3

let userName = prompt("Enter Your Name:");
document.write(userName);

// question 4

let userInput = prompt("Enter a number for multiplication table:", "5");
let num;

if (userInput === "" || userInput === null) {
  num = 5;
} else {
  num = Number(userInput);
}

document.write("<h2>Multiplication Table of " + num + "</h2>");
document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");

// question 5

let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter second subject name:");
let subject3 = prompt("Enter third subject name:");

let totalMarksPerSubject = 100;

let obtainedMarks1 = Number(
  prompt("Enter obtained marks for " + subject1 + ":"),
);
let obtainedMarks2 = Number(
  prompt("Enter obtained marks for " + subject2 + ":"),
);
let obtainedMarks3 = Number(
  prompt("Enter obtained marks for " + subject3 + ":"),
);

let percentage1 = (obtainedMarks1 / totalMarksPerSubject) * 100;
let percentage2 = (obtainedMarks2 / totalMarksPerSubject) * 100;
let percentage3 = (obtainedMarks3 / totalMarksPerSubject) * 100;

let totalPossibleMarks = totalMarksPerSubject * 3;
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let finalPercentage = (totalObtainedMarks / totalPossibleMarks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>",
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarksPerSubject +
    "</td><td>" +
    obtainedMarks1 +
    "</td><td>" +
    percentage1 +
    "%</td></tr>",
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarksPerSubject +
    "</td><td>" +
    obtainedMarks2 +
    "</td><td>" +
    percentage2 +
    "%</td></tr>",
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarksPerSubject +
    "</td><td>" +
    obtainedMarks3 +
    "</td><td>" +
    percentage3 +
    "%</td></tr>",
);
document.write(
  "<tr><th>Total</th><th>" +
    totalPossibleMarks +
    "</th><th>" +
    totalObtainedMarks +
    "</th><th>" +
    finalPercentage +
    "%</th></tr>",
);
document.write("</table>");
