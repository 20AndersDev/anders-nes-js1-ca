const url = "https://botw-compendium.herokuapp.com/api/v2/all"; 

async function getList() {  
  try {                       
    const response = await fetch(url);
    const getData = await response.json(); 
    const list = document.querySelector("#item-list");
    const data = Object.keys(getData.data.creatures.food)
    

    for(let i = 0; i < data.length; i++){
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = getData.data.creatures.food[data[i]].name;
        link.href = `/html/details.html?name=${getData.data.creatures.food[data[i]].name}`;
        li.appendChild(link);
        list.appendChild(li);
        
      }
      document.querySelector("#loader").style.display = "none"
    }

    catch (error) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = `An error occurred`;
  }
};



getList();
