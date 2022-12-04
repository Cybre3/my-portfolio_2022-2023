const mongoose = require('mongoose');
const Joi = require('joi');

const screenSchema = new mongoose.Schema({
  screen_name: {
    type: String,
    required: true,
    minLength: 0,
  },
  component: {
    type: String,
    required: true,
  },
});

const Screen = mongoose.model('total_screens', screenSchema);

function validateScreen(input) {
  const schema = Joi.object({
    screen_name: Joi.string().min(0).required(),
    component: Joi.string().required(),
  });

  return schema.validate(input);
}

exports.Screen = Screen;
exports.validate = validateScreen;
