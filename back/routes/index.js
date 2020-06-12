const express = require('express');
const axios   = require('axios');
try {
  const { acuity_user, acuity_key } = require('../config.js') || {};
} catch (e) {
  console.log('no config file ?')
}

const router  = express.Router();
const responseMock = require('../response.json');

/* GET home page. */
router.get('/api/availability/classes/', async function(req, res, next) {

  if (process.env.NODE_ENV === 'prodction') {
    try {
      const response = await axios.get('https://acuityscheduling.com/api/v1/availability/classes', {
        auth: { 
          username: acuity_user,
          password: acuity_key 
        },
        ...req.query
      })

      res.send(response.data)
    } catch (e) {
      console.log(e)
    }
  } else {
    res.send(responseMock)
  }
});

module.exports = router;
