/* const url = "https://dog.ceo/api/breeds/list/all";

async function getDogs() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
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
  } catch (error) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = `An error occurred: ${error.message}`;
  }
} 

getDogs();
*/




-------------------- Displybrred ----------------



  /*  */