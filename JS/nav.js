const homeButton = document.getElementById("Home");
const contactButton = document.getElementById("Contact")

homeButton.addEventListener("click",function(){
    window.location.href = "/index.html";
});

contactButton.addEventListener("click",function(){
    window.location.href = "/html/contact.html";
});