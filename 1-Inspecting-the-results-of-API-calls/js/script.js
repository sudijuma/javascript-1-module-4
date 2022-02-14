// 1.
// When making API calls, the most important
// thing to do is to
// inspect the JSON that the call returns.
//
// 2.
// You can't make assumptions about what
// the JSON will contain and what properties you can access.

// You can use a simple console.log or software like Postman.

const resultsContainer = document.querySelector(".results");

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=64390a9faa934877be81526aa77db8e3";

async function callApi() {
    const response = await fetch(url);
    const JSONResponse = await response.json();
    const results = JSONResponse.results;
    results.forEach((game) => {
        resultsContainer.innerHTML += `
        <div>Game:${game.name}, Rating:${game.rating}</div>`
    })
}

callApi().then();