const config = require('config');
const mongoose = require('mongoose');
const { Screen } = require('../models/screensModel');

const TOTAL_SCREENS = [
  {
    screen_name: 'Home',
    component: 'Home',
  },
  {
    screen_name: 'About Me',
    component: 'AboutMe',
  },
  {
    screen_name: 'Projects',
    component: 'Projects',
  },
  {
    screen_name: 'Resume',
    component: 'Resume',
  },
  {
    screen_name: 'Coding Challenges',
    component: 'CodingChallenges',
  },
  {
    screen_name: 'Contact Me',
    component: 'ContactMe',
  },
  {
    screen_name: '',
    component: 'Footer',
  },
];

async function seedTotalScreens() {
  await mongoose.connect(config.get('db'));

  await Screen.deleteMany({});

  for (let screen of TOTAL_SCREENS) {
    const EachScreen = await new Screen({
      screen_name: screen.screen_name,
      component: screen.component,
    });

    await Screen.insertMany(EachScreen);
  }

  mongoose.disconnect();

  console.log('Done!');
}

seedTotalScreens();