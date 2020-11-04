
const name = JSON.stringify({ 
	"name": "My cool new game" 
});



const setGame = (name) => {
    let p = fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: name
    }).then( function (response) {
        return response.json();
    }).then(function (response) {
        return response.result.split(' ')[3]
    })
    return p
}


// const scoreList = () => {

// }

// const idGame = setGame(name);

// idGame.then(function (response) {
//     console.log(response)
// })



