const urlParams = new URLSearchParams(window.location.search);
const name2 = urlParams.get("name");
document.title = name2;