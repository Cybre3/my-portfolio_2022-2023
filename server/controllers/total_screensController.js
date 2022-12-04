const { Screen } = require('../models/screensModel');

module.exports = {
  get: {
    allScreens: async (req, res) => {
      const allScreens = await Screen.find();
      res.send(allScreens);
    },
    singleScreen: async (req, res) => {
      const screen = await Screen.findById(req.params.id);

      if (!screen) return res.status(404).send('The screen with the given ID was not found.');

      res.send(screen);
    },
  },
};
