require('babel-register')({
  presets: ['react', 'es2015']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
    <head>
      <meta charset='UTF-8'>
    </head>
    <body>
      <div id='application'></div>
    </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;

global.tracker = window.tracking || {};

require('../../lib/vendor/tracking');
require('web-audio-test-api');

global.window.AudioContext = AudioContext;
