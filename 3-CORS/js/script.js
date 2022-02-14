const resultsContainer = document.querySelector(".results");

const URL = "https://elephant-api.herokuapp.com/elephants";
// My Proxy server
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + URL;


async function makeApiCall(){
    try {
        const response = await fetch(corsFix);
        //convert the response to be json data
        const elephantData = await response.json();
        resultsContainer.innerHTML = alert("success",);
    } catch (err) {
        console.log(err = "noen gikk galt");
        resultsContainer.innerHTML = alert("error", err);
    }
}
makeApiCall();

/* const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

makeApiCall(); */