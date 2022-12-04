const { Screen } = require('../models/screensModel');

module.exports = {
  get: {
    allScreens: async (req, res) => {
      const allScreens = await Screen.find();
      res.send(allScreens);
    },
  },
};
