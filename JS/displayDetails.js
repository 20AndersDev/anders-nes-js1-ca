const itemName = new URL(window.location.href).searchParams.get("name");
const itemProperties = document.querySelector("#item-properties");
const itemNameEl = document.querySelector("#item-name");
const apiUrl = `https://botw-compendium.herokuapp.com/api/v2/entry/${itemName}`;

async function displayDetails() {
  try {
    const response = await fetch(apiUrl);
    const itemData = await response.json();

    itemNameEl.textContent = itemData.data.name;

    Object.keys(itemData.data).forEach(property => {
      const li = document.createElement("li");
      li.textContent = `${property}: ${itemData.data[property]}`;
      itemProperties.appendChild(li);
    });
    document.querySelector("#loader").style.display = "none"
  } catch (error) {
    itemNameEl.textContent = `An error occurred: ${error.message}`;
  }
}

displayDetails();