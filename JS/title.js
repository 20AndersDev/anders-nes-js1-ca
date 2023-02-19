const urlParams = new URLSearchParams(window.location.search);
const urlName = urlParams.get("name");
document.title = urlName;