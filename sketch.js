//Creative coding '17 at PoliMI
//#3 assignement: pattern
//Matteo Testa

var dista = 30;
var ray;
var c;

function setup() {
  createCanvas(800, 800);
  background(0);

  ray = dista/3;
  noStroke();
  smooth();
  c = 1;
  frameRate(30);
}

var px;
var m = 0;

function draw() {
   background(0);
  // fill(0,10);
  // rect(0,0,width, height);
//  var c = int(random(2, 10));
  var noisy = 150;
  m++;
  console.log(c);
  if( m < 30 ) {
    c+=1;
  }
  if(c > 30) {
    c = 1;
    m = 1;
  }

  var i = 1;

  for (var w = 0; w < width+ray*2; w += ray*2) {
    for (var h = ray*2; h < height+ray; h += ray*2) {
      px = w;
      if(i%c) {
        noisy = noise(h*w)*235+35;
        px += ray;
      } else {
        px -= ray;
      }
        // console.log(i);
        if((w/h)%(frameCount/20)) {
          fill(noisy/8, noisy, noisy/8);
          ellipse(px, h, ray, ray);
          fill(0,0,0, noisy*cos(i));
          rect(px-ray, h-ray, ray*2, ray*2);
        } else {
          push();
            fill(0, noisy, noisy);
            translate(px, h-ray/2);
            rotate(QUARTER_PI);
            // rect(-ray/2, -ray/2, ray*0.6, ray*0.6);
            rect( 0, 0, ray*0.5, ray*0.5);
          pop();
        }

        i++;
    }
  }
  //noLoop();
}
