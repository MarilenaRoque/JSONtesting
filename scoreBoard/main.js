
const name = JSON.stringify({ 
	"name": "My cool new game" 
});

const setGame = (name) => {
    fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: name
    }).then( function (response) {
        return response.json();
    }).then( function (response) {
        console.log(response);
    })
}
