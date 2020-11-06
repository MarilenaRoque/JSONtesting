
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

function refreshScore(url) {
    console.log(`refreshing!!!${url}`)
}

function addScore(url) {

    console.log(`Adding Score!${url}`)
}


const idGame = setGame(name);

idGame.then(function (id) {
    return `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${id}/scores/`
}).then(function(url) {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'refresh') {
            refreshScore(url);
        } else if (e.target && e.target.id === 'newScore') {
            addScore(url);
        }
    });
});











