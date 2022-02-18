//1. create a variable and assign the end point url to it, call it randomUserUrl
randomUserUrl = "https://randomuser.me/api/";

//2. select the wrapper div
const wrapperDiv = document.querySelector(".wrapper");
//3. make the api call 

fetch(randomUserUrl)
    .then(response => {
        return response.json();
    })
    .then((jasonData) => {
        const minaResultat = jasonData.results;
        for (let i = 0; i < minaResultat.length; i++) {
            const firstName = minaResultat[i].name.first;
            const lastName = minaResultat[i].name.last;
            const personimg = minaResultat[i].picture.large;
            wrapperDiv.innerHTML += `<h1>${firstName}, ${lastName}</h1>
            <img src="${personimg}" title="the name of the person is${firstName}"/>`
        }
    })
    .catch((error) => console.log(error))


/* fetch(randomUserUrl)
    .then((dettaFunkar) => {
        return dettaFunkar.json();
    })
    .then((whatEver) => {
        const resultatFra = whatEver.results;
        for (let i = 0; i < resultatFra.length; i++) {
            const firstName = resultatFra[i].name.first;
            const lastName = resultatFra[i].name.last;
            const personimg = resultatFra[i].picture.large;
            wrapperDiv.innerHTML += `<h1>${firstName}, ${lastName}</h1>
            <img src="${personimg}" title="the name of the person is${firstName}"/>`;
        }
    })
    .catch((error) => console.log(error)) */

/* fetch(randomUserUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jasonData) {
        const results = jasonData.results;
        for (let i = 0; i < results.length; i++) {
            const firtsName = results[i].name.first;
            const lastName = results[i].name.last;
            const personimg = results[i].picture.large;
            wrapperDiv.innerHTML += `
            <h1>${firtsName}, ${lastName}</h1>
            <img src="${personimg}" title="the name of the person is${firtsName}"/>`
        }
    })
    .catch(function (error) {
        console.log(error)
    }) */

/* fetch(randomUserUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        const results = jsonData.results;
        for (let i = 0; i < results.length; i++) {
            const firstName = results[i].name.first;
            const lastName = results[i].name.last;
            const personimg = results[i].picture.large;
            wrapperDiv.innerHTML += `
            <h1>${firstName}, ${lastName}</h1>
            <img src="${personimg}" title=" the name of the person is ${firstName}" alt="the name of the person is ${firstName}"/>`
        }
    })
    .catch(function (error) {
        console.log(error)
    }) */