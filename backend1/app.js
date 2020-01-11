const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', (req, res) => res.json({stuff: 
    [
        {
          _id: 'dog',
          pets: [
            {
              name: 'Rocky',
              breed: 'American pit bull cross',
              status: 'Neutered and vaccinated',
              gender: 'Female',
              yearsOld: 7,
              adopted: false,
              id: 1,
              pic: "https://i.imgur.com/KaZPe8U.jpg"
            },
            {
              name: 'Juju',
              breed: 'American staff cross',
              status: 'Vaccinated, not neutered',
              gender: 'Male',
              yearsOld: 7,
              adopted: true,
              id: 2,
              pic: "https://i.imgur.com/0ZakDLE.jpg"
            },
            {
              name: 'Knuckles II',
              breed: 'Anatolian Sheperd',
              status: 'Neutered and vaccinated',
              gender: 'Male',
              yearsOld: 1,
              adopted: false,
              id: 3,
              pic: "https://i.imgur.com/ibKrDX3.png"
            }
          ]
        },
        {
          _id: 'cat',
          pets: [
            {
              name: 'Terry',
              breed: 'Domestic medium hair cross',
              status: 'Neutered, not vaccinated',
              gender: 'Male',
              yearsOld: 2,
              adopted: false,
              id: 4,
              pic: "https://i.imgur.com/utK7J07.jpg"
            },
            {
              name: 'Chonker',
              breed: 'Main coone',
              status: 'Status unknown',
              gender: 'Female',
              yearsOld: 5,
              adopted: true,
              id: 5,
              pic: "https://i.imgur.com/fRXTfkk.jpg"
            },
            {
              name: 'Kip',
              breed: 'Domestic shorthair',
              status: 'Neutered and vaccinated',
              gender: 'Female',
              yearsOld: 2,
              adopted: false,
              id: 6,
              pic: "https://i.imgur.com/Oc1XDT3.jpg"
            }
          ]
        }
      ]
}))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))