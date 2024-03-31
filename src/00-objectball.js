function gameObject() {
    return {
        home: {
            teamName: "Arsenal",
            colors: ["Red", "White"],
            players: {
                "David Raya": {
                    number: 1,
                    shoe: 8,
                    points: 20,
                    rebounds: 12,
                    assists: 25,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Benjamin White": {
                    number: 6,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "William Saliba": {
                    number: 5,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Big Gabi": {
                    number: 4,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Declan Rice": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Manchester City",
            colors: ["Blue", "White"],
            players: {
                "Ederson": {
                    number: 1,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
                "Manuel Akanji": {
                    number: 4,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "Rodri": {
                    number: 19,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Kevin Debryune": {
                    number: 7,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Jack Grealish": {
                    number: 10,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}


function numPointsScored(playerName) {
    const game = gameObject();

    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[playerName].points;
        }
    }
    for (const player in game.away.players) {
        if (player === playerName) {
            return game.away.players[playerName].points;
        }
    }

}

function shoeSize(playerName) {
    const game = gameObject();

    for (const player in game.home.players) {
        if (player === playerName) {
            return game.home.players[playerName].shoe;

        }
        for (const player in game.away.players) {
            if (player === playerName) {
                return game.away.players[playerName].shoe;

            }
        }
    }
}
console.log(playerStats("David Raya"));

function teamColors(team) {
    const game = gameObject()

    if (game.home.teamName === team) {
        return game.home.colors

    }
}

function teamNames() {
    const game = gameObject();
    let teamName = []
    teamName = [game.home.teamName, game.away.teamName]
    return teamName
}

function playerNumbers(team) {
    const game = gameObject();
    let playerNums = [];
    if (game.home.teamName === team) {
        for (const playerName in game.home.players) {
            playerNums.push(game.home.players[playerName].number);
        }
    }
    if (game.away.teamName === team) {
        for (const playerName in game.away.players) {
            playerNums.push(game.away.players[playerName].number);
        }
    }

    return playerNums;
}

function playerStats(player) {
    const game = gameObject();
    let plstats = {}
    for (const playerName in game.home.players) {
        if (playerName === player) {
            plstats = { ...game.home.players[player] }

        }
    }


    for (const playerName in game.home.players) {
        if (playerName === player) {
            plstats = { ...game.home.players[player] }


        }
    }
    return plstats
}














