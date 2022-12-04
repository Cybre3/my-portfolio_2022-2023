const router = require('express')();
const screensController = require('../controllers/total_screensController');

router.get('/', screensController.get.allScreens);

module.exports = router;
