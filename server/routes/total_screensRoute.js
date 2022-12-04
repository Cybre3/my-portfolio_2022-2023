const router = require('express')();
const validateObjectId = require('../middleware/validateObjectId');
const screensController = require('../controllers/total_screensController');

router.get('/', screensController.get.allScreens);
router.get('/:id', validateObjectId, screensController.get.singleScreen);

module.exports = router;
