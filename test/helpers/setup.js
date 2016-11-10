require('babel-register')({
  presets: ['react', 'es2015']
});

require('babel-polyfill');
require('jsdom');

global.document = require('jsdom').jsdom(`
    <head>
      <meta charset='UTF-8'>
    </head>
    <body>
      <div id='application'></div>
    </body>
`);

global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};

global.window = document.defaultView;
global.tracker = window.tracking || {};

require('../../lib/vendor/tracking');
require('web-audio-test-api');

global.window.AudioContext = AudioContext;
