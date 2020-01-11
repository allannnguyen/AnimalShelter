var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
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
        },
        {
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 7,
          adopted: true,
          id: 2,
        },
        {
          name: 'Knuckles II',
          breed: 'Anatolian Sheperd',
          status: 'Neutered and vaccinated',
          gender: 'Male',
          yearsOld: 1,
          adopted: false,
          id: 3,
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
        },
        {
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          yearsOld: 5,
          adopted: true,
          id: 5,
        },
        {
          name: 'Kip',
          breed: 'Domestic shorthair',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 2,
          adopted: false,
          id: 6,
        }
      ]
    }
  );
});

module.exports = router;
