
const scoreTable = document.createElement('div');

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


function setItem (item) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${item.user} : ${item.score}`;
    scoreTable.appendChild(paragraph);
}


function displayScores (result) {
    const scoresDiv = document.getElementById('scores-table');
    scoreTable.innerHTML = '';
    scoresDiv.innerHTML = '';
    result.forEach(setItem);
    scoresDiv.appendChild(scoreTable);
}

function refreshScore(url) {
    let promiseRefreshScore = fetch(url, {
        mode: 'cors'
    })
    promiseRefreshScore.then( function (response) {
        return response.json();
    }).then(function(response) {
        displayScores(response.result);
    })
}

function addScore(url) {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    const body = JSON.stringify({ 
        "user": name,
        "score": score
    });
    let promiseAddScore = fetch(url, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: body
    })
    promiseAddScore.then( function (response) {
        return response.json();
    }).then(function () {
        refreshScore(url);
    }
    )
}


const idGame = setGame(name);

idGame.then(function (id) {
    return `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`
}).then(function(url) {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'refresh') {
            refreshScore(url);
        } else if (e.target && e.target.id === 'newScore') {
            addScore(url);

        }
    });
});











