let updating = false;
class Map {
  constructor() {
    let index;
    this.height = [];
    img.loadPixels();
    for (let i = 0; i < width; i++) {
      this.height[i] = [];
      for (let j = 0; j < height; j++) {
        //index = 4 * (j * width + i);
        index = 4 * (j * width + i);
        n = noise(i / 50 + offset, j / 50, noise(i) / 100) * 255;
        let falloff =
          (200 * ((i - width / 2) * (i - width / 2))) / ((width * width) / 3) +
          (200 * ((j - height / 2) * (j - height / 2))) /
            ((height * height) / 3) -
          50;
        n -= falloff;
        this.height[i][j] = n;
        /*let falloff = width / 2 - i;
        if (falloff < 0) {
          falloff = -falloff;
        }
        if (falloff > width / 4) {
          falloff -= width / 4;
          falloff = (50 * falloff) / width;
          n -= falloff * falloff;
        }
        falloff = height / 2 - j;
        if (falloff < 0) {
          falloff = -falloff;
        }
        if (falloff > height / 4) {
          falloff -= height / 4;
          falloff = (50 * falloff) / height;
          n -= falloff * falloff;
        }*/
        if (n > 190) {
          //n = noise(noise(i / factor1) / factor2, noise(j / factor1) / factor2) * 255;
          img.pixels[index] = n - (n % 10) + 30;
          img.pixels[index + 1] = n - (n % 10) + 30;
          img.pixels[index + 2] = n - (n % 10) + 30;
        } else if (n <= 95 && n > 80) {
          img.pixels[index] = 59;
          img.pixels[index + 1] = 179;
          img.pixels[index + 2] = 200;
        } else if (n <= 80) {
          img.pixels[index] = 0;
          img.pixels[index + 1] = 105;
          img.pixels[index + 2] = 148;
        } else if (n > 95 && n <= 110) {
          img.pixels[index] = 194;
          img.pixels[index + 1] = 178;
          img.pixels[index + 2] = 128;
        } else if (n > 110 && n < 125) {
          img.pixels[index] = 96;
          img.pixels[index + 1] = 128;
          img.pixels[index + 2] = 56;
        } else if (n > 125 && n < 150) {
          img.pixels[index] = 1;
          img.pixels[index + 1] = 68;
          img.pixels[index + 2] = 33;
        } else {
          img.pixels[index] = 90;
          img.pixels[index + 1] = 77;
          img.pixels[index + 2] = 65;
        }
        /*if (n % 10 > 0 && n % 10 < 2) {
          img.pixels[index] = 0;
          img.pixels[index + 1] = 0;
          img.pixels[index + 2] = 0;
        }*/
        //img.pixels[index] = 255 - falloff;
        //img.pixels[index + 1] = 255 - falloff;
        //img.pixels[index + 2] = 255 - falloff;
        img.pixels[index + 3] = 255;
        if (n < 100) img.pixels[index + 3] = n;
        /*if (n % 10 > 0 && n % 10 <= 0.5) {
              pixels[index] = 0;
              pixels[index + 1] = 0;
              pixels[index + 2] = 0;
              pixels[index + 3] = 122;
            }*/
      }
    }
    img.updatePixels();
  }
  inWater(pos) {
    if (this.height[Math.round(pos.x)][Math.round(pos.y)] < 95) {
      return true;
    } else return false;
  }
}

class HighResMap {
  constructor() {
    this.offset = createVector(0, 0);
    let index;
    highResImg.loadPixels();

    highResImg.updatePixels();
  }
  update() {
    let index;
    highResImg.loadPixels();
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        //index = 4 * (j * width + i);
        index = 4 * (j * width + i);
        n =
          noise(
            i / (50 * mapZoom) + offset,
            j / (50 * mapZoom),
            noise(i) / 100
          ) * 255;
        /*let falloff = width / 2 - i;
        if (falloff < 0) {
          falloff = -falloff;
        }
        if (falloff > width / 4) {
          falloff -= width / 4;
          falloff = (50 * falloff) / width;
          n -= falloff * falloff;
        }
        falloff = height / 2 - j;
        if (falloff < 0) {
          falloff = -falloff;
        }
        if (falloff > height / 4) {
          falloff -= height / 4;
          falloff = (50 * falloff) / height;
          n -= falloff * falloff;
        }*/
        if (n > 190) {
          //n = noise(noise(i / factor1) / factor2, noise(j / factor1) / factor2) * 255;
          highResImg.pixels[index] = n - (n % 10) + 30;
          highResImg.pixels[index + 1] = n - (n % 10) + 30;
          highResImg.pixels[index + 2] = n - (n % 10) + 30;
        } else if (n <= 95 && n > 80) {
          highResImg.pixels[index] = 59;
          highResImg.pixels[index + 1] = 179;
          highResImg.pixels[index + 2] = 200;
        } else if (n <= 80) {
          highResImg.pixels[index] = 0;
          highResImg.pixels[index + 1] = 105;
          highResImg.pixels[index + 2] = 148;
        } else if (n > 95 && n <= 110) {
          highResImg.pixels[index] = 194;
          highResImg.pixels[index + 1] = 178;
          highResImg.pixels[index + 2] = 128;
        } else if (n > 110 && n < 125) {
          highResImg.pixels[index] = 96;
          highResImg.pixels[index + 1] = 128;
          highResImg.pixels[index + 2] = 56;
        } else if (n > 125 && n < 150) {
          highResImg.pixels[index] = 1;
          highResImg.pixels[index + 1] = 68;
          highResImg.pixels[index + 2] = 33;
        } else {
          highResImg.pixels[index] = 90;
          highResImg.pixels[index + 1] = 77;
          highResImg.pixels[index + 2] = 65;
        }
        /*if (n % 10 > 0 && n % 10 < 2) {
            img.pixels[index] = 0;
            img.pixels[index + 1] = 0;
            img.pixels[index + 2] = 0;
          }*/
        highResImg.pixels[index + 3] = 255;
        if (n < 100) highResImg.pixels[index + 3] = n;
        /*if (n % 10 > 0 && n % 10 <= 0.5) {
                pixels[index] = 0;
                pixels[index + 1] = 0;
                pixels[index + 2] = 0;
                pixels[index + 3] = 122;
              }*/
      }
    }
    highResImg.updatePixels();
    updating = false;
  }
}

function updateZoom() {
  updating = true;
  var upd = setTimeout(function() {
    highresMap.update();
  }, 100);
}

function terrainType(location) {}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    mapMove.x = 0;
  } else if (keyCode === RIGHT_ARROW) {
    mapMove.x = 0;
  }
}

function newMap() {
  //worldMap = new Map();
  var newWorker = new Worker("newMap.js");
}

async function newM() {
  worldMap = new Map();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    mapMove.y += 1;
  }
  if (keyCode === DOWN_ARROW) {
    mapMove.y -= 1;
  }
  if (keyCode === LEFT_ARROW) {
    mapMove.x = 1;
  }
  if (keyCode === RIGHT_ARROW) {
    mapMove.x = -1;
  }
  if (key === "a") {
    mapZoom *= 2;
    updateZoom(function() {
      highresMap.update();
    }, 100);
  }
  if (key === "z") {
    mapZoom /= 2;
    updateZoom();
  }
}
