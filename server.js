const express = require('express')
const app = express()
const PORT =  3000
const cors = require('cors')

app.use(cors())

let clubs = {
    
    'arsenal': {
        'name': 'Arsenal FC',
        'manager': 'Mikel Arteta' ,
        'captain': 'Pierre-Emerick Aubameyang' ,
        'stadium': 'Emirates Stadium' ,
        'value': '£478.17m' ,
        'position': 1 ,
    },

    'aston villa': {
        'name':'Aston Villa FC' ,
        'manager': 'Dean Smith' ,
        'captain': 'Jack Grealish' ,
        'stadium': 'Villa Park' ,
        'value': '£381.87m' ,
        'position': 2,
    },

    'brentford': {
        'name':'Brentford FC' ,
        'manager': 'Thomas Frank' ,
        'captain': 'Nathan Sheppard',
        'stadium': 'Brentford Community Stadium',
        'value': '£126.50m' ,
        'position': 3,
    },

    'brighton': {
        'name':'Brighton & Hove Albion' ,
        'manager': 'Graham Potter',
        'captain': 'Lewis Dunk',
        'stadium': 'Falmer Stadium',
        'value': '£253.89m',
        'position': 4,
    },

    'burnley': {
        'name':'Burnley FC' ,
        'manager': 'Sean Dyche',
        'captain': 'Ben Mee',
        'stadium': 'Turf Moor',
        'value': '£115.31m',
        'position': 5,
    },

    'chelsea': {
        'name':'Chelsea FC' ,
        'manager': 'Thomas Tuchel',
        'captain': 'Cesar Azplilicueta',
        'stadium': 'Stamford Bridge',
        'value': '£815.40m',
        'position': 6,
    },

    'crystal palace': {
        'name':'Crystal Palace FC' ,
        'manager': 'Patrick Vieira',
        'captain': 'Luka Milivojevic',
        'stadium': 'Selhurst Park Stadium',
        'value': '£146.72m' ,
        'position': 7,
    },

    'everton': {
        'name':'Everton FC' ,
        'manager': 'Rafael Benitez',
        'captain': 'Seamus Coleman',
        'stadium': 'Goodison Park',
        'value': '£440.37m',
        'position': 8,
    },

    'leeds united': {
        'name':'Leeds United FC' ,
        'manager': 'Marcelo Bielsa',
        'captain': 'Liam Cooper',
        'stadium': 'Elland Road',
        'value': '£210.38m',
        'position': 9,
    },

    'leicester city': {
        'name':'Leicester City FC' ,
        'manager': 'Brendad Rogers',
        'captain': 'Wes Morgan',
        'stadium': 'King Power Stadium',
        'value': '£486.99',
        'position': 10,
    },

    'liverpool': {
        'name':'Liverpool FC' ,
        'manager': 'Jurgen Klopp',
        'captain': 'Jordan Henderson',
        'stadium': 'Anfield Stadium',
        'value': '£847.35m',
        'position': 11,
    },

    'manchester city': {
        'name':'Manchester City FC' ,
        'manager': 'Pep Guardiola',
        'captain': 'Fernandinho',
        'stadium': 'Etihad Stadium',
        'value': '£916.97m',
        'position': 12,
    },

    'manchester united': {
        'name':'Manchester United FC' ,
        'manager': 'Ole Gunnar Solskjaer',
        'captain': 'Harry Maguire',
        'stadium': 'Old Trafford Stadium',
        'value': '£684.23m',
        'position': 13,
    },

    'newcastle united': {
        'name':'Newcastle United FC' ,
        'manager': 'Steve Bruce',
        'captain': 'Jamaal Lascelles',
        'stadium': "St. James' Park",
        'value': '£212.32m',
        'position': 14,
    },

    'norwich city': {
        'name':'Norwich City FC' ,
        'manager': 'Daniel Farke',
        'captain': 'Grant Hanley',
        'stadium': 'Carrow Road Stadium',
        'value': '£116.19m',
        'position': 15,
    },

    'southampton': {
        'name':'Southampton FC' ,
        'manager': 'Ralph Hasenhuttl',
        'captain': 'James Ward-Prowse',
        'stadium': "St Mary's Stadium",
        'value': '£237.51m',
        'position': 16,
    },

    'tottenham hotspur': {
        'name':'Tottenham Hotspur FC' ,
        'manager': 'Nuno Espirito Santo',
        'captain': 'Harry Kane',
        'stadium': 'Tottenham Hotspur Stadium',
        'value': '£582.30m',
        'position': 17,
    },

    'watford': {
        'name':'Watford FC' ,
        'manager': 'Xisco',
        'captain': 'Troy Deeney',
        'stadium': 'Vicarage Road Stadium',
        'value': '£117.72m',
        'position': 18,
    },

    'west ham united': {
        'name':'West Ham United FC' ,
        'manager': 'David Moyes',
        'captain': 'Declan Rice',
        'stadium': 'London Stadium',
        'value': '£245.48m',
        'position': 19,
    },

    'wolverhampton wanderers': {
        'name':'Wolverhampton Wanderers FC' ,
        'manager': 'Bruno Lage',
        'captain': 'Conor Coady',
        'stadium': 'Molineux Stadium',
        'value': '£363.92m',
        'position': 20,
    },

    'This club is not in the Barclays Premier League': {
        'name': 'N/A',
    }


}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/clubs/:clubName', (request, response) => {
    const clubName = request.params.clubName.toLowerCase()
    console.log(clubName)

    if (clubs[clubName]){
        response.json(clubs[clubName])
    } else {
        response.json(clubs['This club is not in the Barclays Premier League'])
    }
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
