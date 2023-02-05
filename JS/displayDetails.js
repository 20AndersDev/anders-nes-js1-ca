const itemName = new URL(window.location.href).searchParams.get("name");
      const itemProperties = document.querySelector("#item-properties");
      const itemNameEl = document.querySelector("#item-name");
      const apiUrl = `https://botw-compendium.herokuapp.com/api/v2/entry/${itemName}`;

      async function displayDetails() {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const itemData = await response.json();

          itemNameEl.textContent = itemData.data.name;

          Object.keys(itemData.data).forEach(property => {
            const li = document.createElement("li");
            li.textContent = `${property}: ${itemData.data[property]}`;
            itemProperties.appendChild(li);
          });
        } catch (error) {
          itemNameEl.textContent = `An error occurred: ${error.message}`;
        }
      }

      displayDetails();