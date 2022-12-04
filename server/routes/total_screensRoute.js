const router = require('express')();
const validateObjectId = require('../middleware/validateObjectId');
const screensController = require('../controllers/total_screensController');

// GET
router.get('/', screensController.get.allScreens);
router.get('/:id', validateObjectId, screensController.get.singleScreen);

// POST
router.post('/', screensController.post.addNewScreen);

// PUT
router.put('/:id', validateObjectId, screensController.put.updateScreen);

module.exports = router;
