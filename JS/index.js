const url = "https://botw-compendium.herokuapp.com/api/v2/all";

async function getList() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const getData = await response.json();
    const data = Object.keys(getData.data.creatures.food)
    
    const list = document.querySelector("#item-list");

    for(let i = 0; i < data.length; i++){
        if(i === 10){
            break;
        }
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = getData.data.creatures.food[data[i]].name;
        link.href = `/html/details.html?name=${getData.data.creatures.food[data[i]].name}`;
        li.appendChild(link);
        list.appendChild(li);
      }
       

    }

    catch (error) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = `An error occurred: ${error.message}`;
  }
};

getList();
