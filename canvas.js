// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create canvas context, an enormous object that will let us manipulate the canvas.
const c = canvas.getContext('2d');

// draw a rectangle

const colorStyles = ['#f7931e', '#ef2dde', '#1fd0e0', '#98fd8a', '#c319fe'];
c.moveTo(0, 0);

for (i = 0; i < 20; i++) {
  c.fillStyle = colorStyles[i % colorStyles.length];
  c.fillRect(
    (window.innerWidth * i) / 18,
    (window.innerHeight * i) / 18,
    100,
    200
  );
}

// draw a line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.strokeStyle = '#1fd0e0';
c.stroke();

// draw an arc or a circle

let j = 0;
for (let i = 1; i <= 100; i++) {
  c.beginPath(); // it is important to call this method at the beginning of drawing anything, because it separates the current path from the previous one.
  c.arc(200+ 15*i, 300+ 15*i, 30*i, 0, 2 * Math.PI, false);
  c.strokeStyle = 'blue';
  c.stroke();
}
for(let i = 1; i <= 10000; i++){
   c.beginPath(); // it is important to call this method at the beginning of drawing anything, because it separates the current path from the previous one.
   c.arc(
     Math.random() * window.innerWidth,
     Math.random() * window.innerWidth,
     30,
     0,
     2 * Math.PI,
     false
   );
   c.strokeStyle = 'blue';
   c.stroke();
}
