// Filter method Example

// Example 1 Filter Method with Static Data


//I want to import the data array to use its
import teams from "./data/teams.js";
/*  console */

//2. select the teams-container class
//3. select the search class and

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

//ASSING DATA TO A VARIABLE, then work with it
// 4. Assign the teams data to a variable

let teamsToRender = teams;

// 5. loop on the teams array and inject the data to the DOM, teamContainer
function renderTeams(someArr) {
    //clear the team container
    teamContainer.innerHTML = "";
    for (let i = 0; i < someArr.length; i++) {
        console.log(someArr[i]);
        teamContainer.innerHTML += `<div class="team">${someArr[i].full_name}</div>`;
    }
}
renderTeams(teamsToRender);

//6. wrap this for loop in function and then we use it.
/* for (let i = 0; i < teamsToRender.length; i++) {
    console.log(teamsToRender[i]);
    teamContainer.innerHTML+=`<div class="team">${teamsToRender[i].full_name}</div>`;
} */

// 7. I want to detect that I wrote something(text) inside the input.

search.onkeyup = event => {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredTeams = teamsToRender.filter((team) => {
        //Check if any of the full name porp start with the seachvalue
        if (team.full_name.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });
    renderTeams(filteredTeams);
}

/* console.log(event);
//8. get the search value or the search keyword the user entered
console.log(event.target.value)
console.log('searchValue', searchValue);

console.log('filteredTeams', filteredTeams)
//Assign the new filtered aray to the old array
//teamsToRender = filteredTeams;
console.log('teamsToRender', filteredTeams); */