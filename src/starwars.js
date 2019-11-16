function showInfo(x) {
fetch (`https://swapi.co/api/people/${x}`)// make the request
    .then(response => response.json()) 
    .then(myJson => {
        console.log(myJson)
        document.getElementById('info').innerHTML= 

        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })}