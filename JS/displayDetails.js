const itemName = new URL(window.location.href).searchParams.get("name");
const itemProperties = document.querySelector("#item-properties");
const itemNameEl = document.querySelector("#item-name");
const itemImage = document.querySelector("#item-image")
const apiUrl = `https://botw-compendium.herokuapp.com/api/v2/entry/${itemName}`;

async function displayDetails() {
  try {
    const response = await fetch(apiUrl);
    const itemData = await response.json();

    itemNameEl.textContent = itemData.data.name;

    Object.keys(itemData.data).forEach(property => {
      if(property === "image" || property === "name") {
        return;
      }
      const li = document.createElement("li");
      li.textContent = `${property}: ${itemData.data[property]}`;
      itemProperties.appendChild(li);

    });

    itemImage.src = `https://botw-compendium.herokuapp.com/api/v2/entry/${itemName}/image`;
    document.querySelector("#loader").style.display = "none"
  } catch (error) {
    document.querySelector("#loader").style.display = "none"
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = `An error occurred: ${error.message}`;
  }
}

displayDetails();