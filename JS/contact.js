const form = document.querySelector("#formContact")
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#adress-error");

function formVal(input){
    input.preventDefault();

    if (yourName.value.length === 0){
        nameError.style.display = "block";
        yourName.style.borderColor = "red";
    } else {
        nameError.style.display = "none"
        yourName.style.borderColor = "black";
    }

    if (subject.value.length < 10){
        subjectError.style.display = "block";
        subject.style.borderColor = "red";
    } else {
        subjectError.style.display = "none";
        subject.style.borderColor = "black";
    }

    if(validEmail(email.value) === false){
        emailError.style.display = "block";
        email.style.borderColor = "red";
    } else {
        emailError.style.display = "none";
        email.style.borderColor = "black";
    };

    if (address.value.length < 25){
        addressError.style.display = "block";
        address.style.borderColor = "red";
    } else {
        addressError.style.display = "none";
        address.style.borderColor = "black";
    };

}

function validEmail(checkemail) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(checkemail);
  }



form.addEventListener("submit", formVal);


