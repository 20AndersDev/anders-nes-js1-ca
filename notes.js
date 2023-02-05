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



  /* const urlParams2 = new URL(window.location.href);
  const breed2 = urlParams2.searchParams.get("breed");
  
  const breedName = document.querySelector("#breed-name");
  const breedImage = document.querySelector("#breed-image");
  
  async function getBreedDetails() {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      breedName.textContent = breed;
      const image = document.createElement("img");
      image.src = data.message;
      breedImage.appendChild(image);
    } catch (error) {
      breedName.textContent = `An error occurred: ${error.message}`;
    }
  }
  
  getBreedDetails(); */