const { Screen, validate } = require('../models/screensModel');

module.exports = {
  get: {
    allScreens: async (req, res) => {
      const allScreens = await Screen.find();
      res.send(allScreens);
    },
    singleScreen: async (req, res) => {
      const screen = await Screen.findById(req.params.id);

      if (!screen) return res.status(404).send('The screen with the given ID was not found.');

      res.status(200).send(screen);
    },
  },
  post: {
    addNewScreen: async (req, res) => {
      const { screen_name, component } = req.body;
      const screenAlreadyExists = await Screen.find({ screen_name });

      if (screenAlreadyExists) return res.status(404).send('Screen already exists.');

      const newScreen = new Screen({
        screen_name,
        component,
      });

      const result = await newScreen.save();
      res.status(200).send(result);
    },
  },
  put: {
    updateScreen: async (req, res) => {
      const { error, value } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const screen = await Screen.findByIdAndUpdate(
        req.params.id,
        {
          screen_name: value.screen_name,
          component: value.component,
        },
        { new: true }
      );

      if (!screen) return res.status(404).send('screen with given Id was not found.');

      res.status(200).send(screen);
    },
  },
};
