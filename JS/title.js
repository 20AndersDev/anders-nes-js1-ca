const urlParams = new URL(window.location.href);
const breed = urlParams.searchParams.get("breed");

document.title = breed;