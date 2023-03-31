let newElement = document.createElement("p");
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



function getValue() {
    let userValue = document.getElementById("input").value;
    console.log(userValue);

        if (userValue.match(validRegex)) {
            newElement.innerHTML = "";
            newElement.append("Your email has been recieved");
            newElement.className = "correct";
            document.getElementById("emailChecker").append(newElement);
        } else {
            newElement.innerHTML = "";
            newElement.append("Oops! Please check your email");
            newElement.className = "incorrect";
            document.getElementById("emailChecker").append(newElement);
        }
}