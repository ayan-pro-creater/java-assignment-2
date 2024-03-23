document.getElementById("Concatente").onclick=function(){
  let firstname = prompt("Enter you first Name")
  let lastname = prompt("Enter you last Name")
  let gree = "Have a good day"
  let exc = "!"
  let fullname = gree + " " + firstname + " " + lastname +" "+ exc;
  alert(fullname)
  document.getElementById("ott").innerHTML = fullname;
  let statment = '<p style="text-align: left;">let firstname = prompt("Enter you first Name") <br>let lastname = prompt("Enter you last Name") <br> let gree = "Have a good day" <br> let exc = "!"</p>'

  document.getElementById("par").innerHTML = statment
}
// Ask Name From User
document.getElementById("asame").onclick=function(){
    let fullname = prompt("Enter Your Name")
    alert(fullname)
    document.getElementById("ott").innerHTML = fullname;
    let statment = 'let fullname = prompt("Enter Your Name")'
    document.getElementById("par").innerHTML = statment; 


}

// Comparison Operators
document.getElementById("co").onclick = function(){
    let num1 = +prompt("enter your first value")
    let num2 = +prompt("enter your second value")
    let message
    if (num1 === num2){
      message = ' '+ num1 +' is equal to '+num2+''
    }else if (num1 > num2) {
        message = ' '+ num1 +' is greater than '+num2+''
    }else if(num1 < num2){
        message = ' '+ num1 +' is less than '+num2+''
    }else{
        message = "Please enter the value first"
    }
    alert(message)
    document.getElementById("ott").innerHTML = message;
    let statment = '  <p>let num1 = +prompt("enter your first value") <br> let num2 = +prompt("enter your second value")</p>'
    document.getElementById("par").innerHTML = statment;
}
// if else if
document.getElementById("ifelse").onclick = function() {
let gamename = prompt("enter your favourite game name").toLowerCase()
let mass
if (gamename === "cricket"){    
   mass = "Cricket is a good game"
}else if (gamename === "hockey"){
    mass = "hockey is  nyc game"
}else{
    mass = "is you fav game"
}

alert(mass)
document.getElementById("ott").innerHTML = mass ;
}

// Testing Sets of Conditions
document.getElementById("sb").onclick = function () {
    let age = +prompt("Enter Your Age");
    let weight = +prompt("Enter Your weight");
    let health;
    if (age >= 18 && weight <= 70) {
       health = "You are a smart Gentleman.";
    } else if (age >= 18 && weight > 70) {
        health = "You are a fat boy.";
    } else if (age < 18 && weight > 50) {
        health = "motu kam khaya kar"
    }else {
        health = "You are a baby boy.";
    }

    let statment = '<p style="text-align: center;">let age = +prompt("Enter Your Age"); <br> age = '+ age +' <br> let weight = +prompt("Enter Your weight"); <br> weight = '+ weight +' </p>'
    document.getElementById("par").innerHTML = statment;
    
    alert(health);
    document.getElementById("ott").innerHTML = health;
}


// if Statements Nested
document.getElementById("ml").onclick = function () {
    let age = +prompt("Enter your Age to check are you eligible to borrow the book or not.");
    let massage;
    if (age >= 18) {
        massage = "You are old enough to borrow books";
        // alert(massage)
        // Check membership code.
        let isMember = +prompt("Enter you three digit membership code.");
        
        if (isMember >= 100) {
            massage = "You are a member."
        // check book name
            let bookAvailable = prompt("Enter the book name Beloved , Annihilation , Atonement").toLowerCase();

            if (bookAvailable === "atonement" || bookAvailable === "annihilation") {
                massage = "The book is available. You can borrow it."
            }
            else {
                massage = "Sorry, the book is not available."
            }
        } else {
            massage = "You are not a member. Please sign up to borrow books"
        }
        
    } else {
        massage = "You must be at least 18 years old to borrow books."
    }
    alert(massage);
    
    document.getElementById("ott").innerHTML = massage ;
    
    let statment = `<p style="text-align: center;">Enter your Age to check are you eligible to borrow the book or not.<br> Enter you three digit membership code.  <br> Enter the book name Beloved , Annihilation , Atonement    </p>`
    
    document.getElementById("par").innerHTML = statment;
}

// Login
document.getElementById("cl").onclick = function () {

    document.getElementById("par").innerHTML = "";
    document.getElementById("ott").innerHTML = "";
    

    let username = prompt("Enter Your username.")
    let loginusername = username;
    let massage
    if (loginusername !== "" && loginusername !== " " && username === loginusername ) {
        let password = +prompt("Enter password (at  least 5 Numeric Digit):")
        if (password >= 10000) {
            massage = "You are authorized to access this page."
        } else {
            massage = "Please enter your password."
        }
    } else {
        massage = "Invalid username. Please enter your username again."
    }

    alert(massage)
    document.getElementById("ott").innerHTML = massage;
    
    let statment = '  <p style="text-align: center;">Enter Your username <br> Enter password (at least 5 characters):</p> '
    document.getElementById("par").innerHTML = statment;

}

// Clear Statement
document.getElementById("clearone").onclick = function () {
    document.getElementById("par").innerHTML = "";    
}
// Clear Output
document.getElementById("cleartwo").onclick = function () {
    document.getElementById("ott").innerHTML = "";    
}
