const express = require('express');
const axios   = require('axios');
const { acuity_user, acuity_key } = require('../config.js');
const router  = express.Router();
const fs = require('fs');
const responseMock = require('../response.json');

/* GET home page. */
router.get('/api/availability/classes/', async function(req, res, next) {
  // console.log(req.query);

  /*
  try {
    const response = await axios.get('https://acuityscheduling.com/api/v1/availability/classes', {
      auth: { 
        username: acuity_user,
        password: acuity_key 
      },
      ...req.query
    })
    // keep response in a json file
    // fs.writeFileSync('./response.json', JSON.stringify(response.data));

    res.send(response.data)
  } catch (e) {
    console.log(e)
  }
  */
  res.send(responseMock)
});

module.exports = router;
