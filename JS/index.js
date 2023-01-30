const url = "https://dog.ceo/api/breeds/list/all";

const resultsContainer = document.querySelector(".results");

async function getDogs() {

    const response = await fetch(url);
    const results = await response.json();
    const facts = results.all;

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);
        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    
    
    }



}


getDogs();