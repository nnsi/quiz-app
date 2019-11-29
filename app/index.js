require('./app.tag');

import QuizApp from './js/app.js'

riot.mount('app', {
  'QuizApp': QuizApp,
  'obs': riot.observable()
});