
//in this code, let will be used to declare the variable marks
// hence the value assigned to the variable will be parsed in the code and will console the student Grade
let marks;
if (marks < 0 || marks > 100){
    console.log('Invalid Choice')
} else if (marks >= 79){
    console.log("A");
} else if (marks >=60 && marks < 79 ){
    console.log("B")
} else if (marks >= 49 && marks <= 59){
    console.log("C")
} else if (marks >= 40 && marks < 49){
    console.log("D")
} else {
    console.log("E")
}