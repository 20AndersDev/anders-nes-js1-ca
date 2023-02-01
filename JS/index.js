const url = "https://dog.ceo/api/breeds/list/all";

async function getDogs() {
    const response = await fetch(url);
    const data = await response.json();
    const breeds = Object.keys(data.message);

    const list = document.querySelector("#breed-list");

    for (let i = 0; i < breeds.length; i++) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = breeds[i];
        link.href = `/html/details.html?breed=${breeds[i]}`;
        li.appendChild(link);
        list.appendChild(li);
    }
}

getDogs();