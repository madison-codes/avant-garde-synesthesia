import React from 'react';
import tracking from '../vendor/tracking';
import findIndex from '../helpers/index';

export default class TrackColor extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.tracker();
  }

  tracker() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker, { camera: true });
    tracker.on('track', (event) => {
      event.data.forEach((rect) => {
        context.strokeRect(rect.x, rect.y, 30, 30);
        context.strokeStyle = '#ADEDE0';
        // init();
        // step();
        if (rect) { this.props.onNoteChange(findIndex(rect));
        }
      });
    });
  }

  render() {
    return (
      <section>
        <canvas id="canvas" height="600" width="1400"></canvas>
        <div  id="container"></div>
      </section>
    )
  }
}

let ROWS;
let COLS;
let bounds;

var NUM_PARTICLES = (( ROWS = 100 ) * ( COLS = 300 )),
    THICKNESS = Math.pow( 80, 2 ),
    SPACING = 3,
    MARGIN = 100,
    COLOR = 220,
    DRAG = 0.95,
    EASE = 0.25,

    container,
    particle,
    canvas,
    mouse,
    stats,
    list,
    ctx,
    tog,
    man,
    dx, dy,
    mx, my,
    d, t, f,
    a, b,
    i, n,
    w, h,
    p, s,
    r, c
    ;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

function init() {

  container = document.getElementById( 'container' );
  canvas = document.createElement( 'canvas' );

  ctx = canvas.getContext( '2d' );
  man = false;
  tog = true;

  list = [];

  w = canvas.width = COLS * SPACING + MARGIN * 2;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;

  container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
  container.style.marginTop = Math.round( h * -0.5 ) + 'px';

  for ( i = 0; i < NUM_PARTICLES; i++ ) {

    p = Object.create( particle );
    p.x = p.ox = MARGIN + SPACING * ( i % COLS );
    p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );

    list[i] = p;
  }

  if ( typeof Stats === 'function' ) {
    document.body.appendChild( ( stats = new Stats() ).domElement );
  }

  container.appendChild( canvas );
}

function step() {
  console.log('step');


  if ( stats ) stats.begin();

  if ( tog = !tog ) {

    if ( !man ) {

      t = +new Date() * 0.001;
      mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
      my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
    }

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = list[i];

      d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
      f = -THICKNESS / d;

      if ( d < THICKNESS ) {
        t = Math.atan2( dy, dx );
        p.vx += f * Math.cos(t);
        p.vy += f * Math.sin(t);
      }

      p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
      p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

    }

  } else {

    b = ( a = ctx.createImageData( w, h ) ).data;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = list[i];
      b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
    }

    ctx.putImageData( a, 0, 0 );
  }

  if ( stats ) stats.end();

  requestAnimationFrame( step );
}
