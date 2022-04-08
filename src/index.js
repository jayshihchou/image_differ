if (!String.prototype.replaceAll) {
  // eslint-disable-next-line no-extend-native
  String.prototype.replaceAll = function replaceAll(search, replace) {
    return this.split(search).join(replace);
  };
}

/* eslint-disable no-console */
window.mobileCheck = function mobileCheck() {
  let check = false;
  // eslint-disable-next-line no-useless-escape
  (function checkmobile(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; }(navigator.userAgent || navigator.vendor || window.opera));
  return check;
};
document.body.style.backgroundColor = '#35363A';
const isMobile = window.mobileCheck();

const container = document.getElementById('container');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image3Button = document.getElementById('image3Button');

let toggleOverlap3 = true;

const overlap_div = document.getElementById('overlap_div');
const overlap1 = document.getElementById('overlap1');
const overlap2 = document.getElementById('overlap2');
const overlap3 = document.getElementById('overlap3');
const difference = document.getElementById('difference');
const diffDrawer = document.getElementById('diffDrawer');
const drContext = diffDrawer.getContext('2d');
difference.style.display = "none";
diffDrawer.style.display = "none";

const rectangle = document.getElementById('rectangle');
const rectDrawer = document.getElementById('rectDrawer');
const rdContext = rectDrawer.getContext('2d');
rectDrawer.style.display = "none";
rectangle.style.display = "none";
let rdStartX = 0;
let rdStartY = 0;
let rdWidth = 0;
let rdHeight = 0;
let rdRect = [0, 0, 0, 0];
let rdIsDown = false;
let rdHasRect = false;
let rdScaling = false;
let overlapSizeX = 0;
let overlapSizeY = 0;
let currentSizeX;
let currentSizeY;
let startSizeX = undefined;
let startSizeY = undefined;
let targetSizeX = undefined;
let targetSizeY = undefined;
let startPosX = 0;
let startPosY = 0;
let targetPosX = 0;
let targetPosY = 0;
let scaleTime = 0.2;
let scaleStTime = -1;
let scaleEdTime = -1;
let timer = 0;
let scaling = false;
let mouseMoving = false;

const slider = document.getElementById('slider');
const slider2 = document.getElementById('slider2');

const sliderlabel1 = document.getElementById('sliderlabel1');
const sliderlabel2 = document.getElementById('sliderlabel2');

const canvas1 = document.createElement('canvas');
const context1 = canvas1.getContext('2d');

const canvas2 = document.createElement('canvas');
const context2 = canvas2.getContext('2d');

const sliderThumbStyle = document.querySelector('[data="slider"]');

const imglabel1 = document.getElementById('imglabel1');
const imglabel2 = document.getElementById('imglabel2');
const imglabel3 = document.getElementById('imglabel3');

const img1 = new Image();
const img2 = new Image();
const img3 = new Image();
let img1Ratio = 1;
let img2Ratio = 1;
let img3Ratio = 1;

function vh(v) {
  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function clamp(v, min, max) {
  let val = v;
  if (val > max) val = max;
  if (val < min) val = min;
  return val;
}

let wh_fn = vh;

function onResize() {
  const landscape = window.innerWidth > window.innerHeight;
  let size = 30;
  let sizeStr = 'vh';
  wh_fn = vh;
  if (!landscape) {
    sizeStr = 'vw';
    wh_fn = vw;
  }
  let sliderThumbSize = 2;
  let top_offset = 2;

  if (isMobile) {
    imglabel1.style.display = 'none';
    imglabel2.style.display = 'none';
    imglabel3.style.display = 'none';
    sliderThumbSize = `${size / 4}`;
    top_offset = 5;
    sliderlabel1.style.fontSize = '30px';
    sliderlabel2.style.fontSize = '30px';
  }

  image1.style.width = `${size}${sizeStr}`;
  image1.style.height = `${size * img1Ratio}${sizeStr}`;
  imglabel1.style.top = `${size / 2}${sizeStr}`;
  imglabel1.style.left = `${size / 2 - 4}${sizeStr}`;

  image2.style.width = `${size}${sizeStr}`;
  image2.style.height = `${size * img2Ratio}${sizeStr}`;
  image2.style.left = `${size + 2}${sizeStr}`;
  imglabel2.style.top = `${size / 2}${sizeStr}`;
  imglabel2.style.left = `${(size / 2) * 3 - 4}${sizeStr}`;

  image3.style.width = `${size}${sizeStr}`;
  image3.style.height = `${size * img3Ratio}${sizeStr}`;
  image3.style.left = `${size * 2 + 2}${sizeStr}`;
  imglabel3.style.top = `${size / 2}${sizeStr}`;
  imglabel3.style.left = `${(size / 2) * 5 - 11}${sizeStr}`;

  image3Button.style.width = `${size}${sizeStr}`;
  image3Button.style.height = `${size}${sizeStr}`;

  overlapSizeX = size * 2 / img1Ratio;
  overlapSizeY = size * 2;
  overlap_div.style.top = `${size + top_offset}${sizeStr}`;
  overlap_div.style.width = `${overlapSizeX}${sizeStr}`;
  overlap_div.style.height = `${overlapSizeY}${sizeStr}`;
  // overlap1.style.top = `${size + top_offset}${sizeStr}`;
  overlap1.style.width = `${overlapSizeX}${sizeStr}`;
  overlap1.style.height = `${overlapSizeY}${sizeStr}`;
  // overlap2.style.top = `${size + top_offset}${sizeStr}`;
  overlap2.style.width = `${overlapSizeX}${sizeStr}`;
  overlap2.style.height = `${overlapSizeY}${sizeStr}`;
  // overlap3.style.top = `${size + top_offset}${sizeStr}`;
  overlap3.style.width = `${overlapSizeX}${sizeStr}`;
  overlap3.style.height = `${overlapSizeY}${sizeStr}`;
  // difference.style.top = `${size + top_offset}${sizeStr}`;
  difference.style.width = `${overlapSizeX}${sizeStr}`;
  difference.style.height = `${overlapSizeY}${sizeStr}`;
  rectDrawer.width = wh_fn(overlapSizeX);
  rectDrawer.height = wh_fn(overlapSizeY);
  rectangle.style.width = `${overlapSizeX}${sizeStr}`;
  rectangle.style.height = `${overlapSizeY}${sizeStr}`;

  slider.style.width = `${size * 2}${sizeStr}`;
  slider.style.height = `${sliderThumbSize}${sizeStr}`;

  slider.style.top = `${size * 3 + sliderThumbSize * 2}${sizeStr}`;
  sliderlabel1.style.top = `${size * 3 + sliderThumbSize * 2 + 0.25}${sizeStr}`;
  sliderlabel1.style.left = `${size - 1}${sizeStr}`;

  slider2.style.width = `${size * 2}${sizeStr}`;
  slider2.style.height = `${sliderThumbSize}${sizeStr}`;

  slider2.style.top = `${size * 3 + sliderThumbSize * 3 + 1}${sizeStr}`;
  sliderlabel2.style.top = `${size * 3 + sliderThumbSize * 3 + 1.25}${sizeStr}`;
  sliderlabel2.style.left = `${size - 2.25}${sizeStr}`;

  image3Button.style.left = `${size * 2 + 2}${sizeStr}`;

  sliderThumbStyle.innerHTML = `

#slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${sliderThumbSize}${sizeStr};
    height: ${sliderThumbSize}${sizeStr};
    background: #202124;
    cursor: pointer;
}

#slider::-moz-range-thumb {
    width: ${sliderThumbSize}${sizeStr};
    height: ${sliderThumbSize}${sizeStr};
    background: #202124;
    cursor: pointer;
}

#slider2::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${sliderThumbSize}${sizeStr};
    height: ${sliderThumbSize}${sizeStr};
    background: #202124;
    cursor: pointer;
}

#slider2::-moz-range-thumb {
    width: ${sliderThumbSize}${sizeStr};
    height: ${sliderThumbSize}${sizeStr};
    background: #202124;
    cursor: pointer;
}
`
}

image3Button.onclick = () => {
  toggleOverlap3 = !toggleOverlap3;
  overlap3.style.display = toggleOverlap3 ? 'none' : 'block';
  difference.style.display = toggleOverlap3 ? 'block' : 'none';
  sliderlabel2.innerText = toggleOverlap3 ? 'Difference' : 'Third Image';
};

image3Button.onmouseenter = () => {
  image3.style.opacity = 0.5;
}
image3Button.onmouseleave = () => {
  image3.style.opacity = 1.0;
}
image3Button.onmousedown = () => {
  image3.style.opacity = 0.3;
}
image3Button.onmouseup = () => {
  image3.style.opacity = 1.0;
}

slider.oninput = () => {
  overlap2.style.opacity = slider.value * 0.01;
};

slider2.oninput = () => {
  overlap3.style.opacity = slider2.value * 0.01;
  difference.style.opacity = slider2.value * 0.01;
}

function rdMouseDown(e) {
  // console.log('mouse down');
  e.preventDefault();
  e.stopPropagation();
  if (e.button === 0) {
    rdStartX = parseInt(e.layerX);
    rdStartY = parseInt(e.layerY);
    // console.log(`stX: ${rdStartX}, stY: ${rdStartY}`);
    rdIsDown = true;
  } else if (e.button === 1) {
    mouseMoving = true;
  }
}

function rdMouseOut(e) {
  // console.log('mouse up');
  e.preventDefault();
  e.stopPropagation();
  rdIsDown = false;
  // rdContext.clearRect(0, 0, rectDrawer.width, rectDrawer.height);
  // rectangle.src = rectDrawer.toDataURL();
  rectangle.style.display = "none";
  mouseMoving = false;
}

function rdMouseUp(e) {
  // console.log('mouse up');
  e.preventDefault();
  e.stopPropagation();

  if (rdIsDown) {
    let mouseX = parseInt(e.layerX);
    let mouseY = parseInt(e.layerY);

    rdWidth = mouseX - rdStartX;
    rdHeight = mouseY - rdStartY;
    // rdContext.clearRect(0, 0, rectDrawer.width, rectDrawer.height);
    // rectangle.src = rectDrawer.toDataURL();
    rectangle.style.display = "none";

    let overlapsizeX = wh_fn(overlapSizeX);
    let overlapsizeY = wh_fn(overlapSizeY);
    // console.log(overlapsizeX);
    if (startSizeX === undefined || startSizeY === undefined) {
      startSizeX = overlapsizeX;
      targetSizeX = overlapsizeX;
      startSizeY = overlapsizeY;
      targetSizeY = overlapsizeY;
      startPosX = 0;
      startPosY = 0;
      targetPosX = 0;
      targetPosY = 0;
    }
    if (rdHasRect) {
      if (!rdScaling) {
        rdScaling = true;
        let size = Math.abs(rdWidth) > Math.abs(rdHeight) ? Math.abs(rdWidth) : Math.abs(rdHeight);
        let ratio = overlapsizeX / size;
        let scaleX = overlapsizeX * ratio;
        let scaleY = overlapsizeY * ratio;
        let scrollPosX = rdRect[0] / overlapsizeX;
        let scrollPosY = rdRect[1] / overlapsizeY;

        // console.log(rdRect[0], rdRect[1]);
        // console.log(rdRect);
        // console.log(scrollPosX, scrollPosY);
        rdScaleToRect(scaleX, scaleY, scrollPosX, scrollPosY);
      }
    }
    rdHasRect = false;
    rdIsDown = false;
  }
  if (mouseMoving) {
    mouseMoving = false;
  }
}

function rdMouseMove(e) {
  if (rdIsDown) {
    // console.log('mouse move');
    e.preventDefault();
    e.stopPropagation();
    let mouseX = parseInt(e.layerX);
    let mouseY = parseInt(e.layerY);

    rdWidth = mouseX - rdStartX;
    rdHeight = mouseY - rdStartY;
    let maxx = Math.max(rdStartX, rdStartX + rdWidth);
    let minx = Math.min(rdStartX, rdStartX + rdWidth);
    let maxy = Math.max(rdStartY, rdStartY + rdHeight);
    let miny = Math.min(rdStartY, rdStartY + rdHeight);

    rdRect = [
      minx, miny, maxx - minx, maxy - miny
    ];

    rdContext.fillStyle = 'rgba(30, 100, 155, 0.2)';
    rdContext.clearRect(0, 0, rectDrawer.width, rectDrawer.height);
    rdContext.fillRect(rdRect[0], rdRect[1], rdRect[2], rdRect[3]);
    // console.log(rdRect);
    rectangle.style.display = 'block';
    rectangle.src = rectDrawer.toDataURL();
    rdHasRect = true;
  }
  if (mouseMoving) {
    // console.log(e.movementX, e.movementY);
    overlap_div.scrollLeft = clamp(overlap_div.scrollLeft - e.movementX, 0, targetSizeX);
    overlap_div.scrollTop = clamp(overlap_div.scrollTop - e.movementY, 0, targetSizeY);
  }
}

function rdSetImageSize(x, y) {
  // console.log(`set: ${x}`);
  let scaleX = `${x}px`;
  let scaleY = `${y}px`;
  overlap1.style.width = scaleX;
  overlap1.style.height = scaleY;
  overlap2.style.width = scaleX;
  overlap2.style.height = scaleY;
  overlap3.style.width = scaleX;
  overlap3.style.height = scaleY;
  difference.style.width = scaleX;
  difference.style.height = scaleY;
}

function rdScaleToRect(w, h, x, y) {
  let scaleX = Math.abs(parseInt(w));
  let scaleY = Math.abs(parseInt(h));
  // console.log(scaleX, scaleY);
  if (targetSizeX !== scaleX || targetSizeY !== scaleY) {
    startSizeX = targetSizeX;
    startSizeY = targetSizeY;
    targetSizeX = scaleX;
    targetSizeY = scaleY;
    scaleStTime = timer;
    scaleEdTime = timer + scaleTime;
    scaling = true;
  }

  if (targetPosX !== x || targetPosY !== y) {
    startPosX = targetPosX;
    startPosY = targetPosY;
    targetPosX = x;
    targetPosY = y;
  }
  // console.log(targetPosX, targetPosY, x, y);
}

function rdSetScrollPosition(rx, ry) {
  let overlapsizeX = wh_fn(overlapSizeX);
  let overlapsizeY = wh_fn(overlapSizeY);

  let scrollScaleX = overlap_div.scrollWidth - overlap_div.clientWidth;
  let scrollScaleY = overlap_div.scrollHeight - overlap_div.clientHeight;
  if (scrollScaleX <= 0) {
    scrollScaleX = overlapsizeX;
  }
  scrollScaleX = rx * scrollScaleX;
  scrollScaleX = scrollScaleX + (overlapsizeX * 0.5);
  if (scrollScaleY <= 0) {
    scrollScaleY = overlapsizeY;
  }
  scrollScaleY = ry * scrollScaleY;
  scrollScaleY = scrollScaleY + (overlapsizeY * 0.5);

  overlap_div.scrollLeft = scrollScaleX;
  overlap_div.scrollTop = scrollScaleY;
}

function updateScale() {
  if (scaleEdTime > timer) {
    let normalizedTime = (timer - scaleStTime) / scaleTime;
    let scaleX = (targetSizeX - startSizeX) * normalizedTime + startSizeX;
    let scaleY = (targetSizeY - startSizeY) * normalizedTime + startSizeY;
    rdSetImageSize(scaleX, scaleY);

    let rx = (targetPosX - startPosX) * normalizedTime + startPosX;
    let ry = (targetPosY - startPosY) * normalizedTime + startPosY;

    rdSetScrollPosition(rx, ry);

  } else if (scaling) {
    scaling = false;
    rdSetImageSize(targetSizeX, targetSizeY);
    rdSetScrollPosition(targetPosX, targetPosY);
  }
}

function rdDBClick(e) {
  e.preventDefault();
  e.stopPropagation();
  if (rdScaling) {
    let overlapsizeX = wh_fn(overlapSizeX);
    let overlapsizeY = wh_fn(overlapSizeY);
    rdScaling = false;
    rdScaleToRect(overlapsizeX, overlapsizeY, 0, 0);
  }
}

overlap_div.onmousedown = rdMouseDown;
overlap_div.onmousemove = rdMouseMove;
overlap_div.onmouseleave = rdMouseOut;
overlap_div.onmouseup = rdMouseUp;
overlap_div.ondblclick = rdDBClick;

function arrayBufferToBase64(bytes) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function readImage(url, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', url, true);
  rawFile.responseType = 'arraybuffer';
  rawFile.onreadystatechange = function onreadystatechange() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        const data = new Uint8Array(rawFile.response);
        const src = `data:image;base64,${arrayBufferToBase64(data)}`;
        callback(src);
      }
    }
  };
  rawFile.send();
}

function preventDefaultEvents(e) {
  e.preventDefault();
  e.stopPropagation();
}

function make_diff(src1, src2) {
  if (!src1 || !src2) {
    return;
  }

  img1.src = src1;
  if (img1.width === 0 || img1.height === 0) return;
  canvas1.width = img1.width;
  canvas1.height = img1.height;
  img1Ratio = img1.height / img1.width;
  context1.drawImage(img1, 0, 0);
  const imgData1 = context1.getImageData(0, 0, img1.width, img1.height);

  img2.src = src2;
  if (img2.width === 0 || img2.height === 0) return;
  canvas2.width = img2.width;
  canvas2.height = img2.height;
  img2Ratio = img2.height / img2.width;
  context2.drawImage(img2, 0, 0);
  const data2 = context2.getImageData(0, 0, img2.width, img2.height).data;

  imgData1.data.forEach((v, i, array) => {
    array[i] = ((i + 1) % 4 === 0) ? 255 : Math.abs(data2[i] - v);
  });

  diffDrawer.width = img1.width;
  diffDrawer.height = img1.height;
  drContext.putImageData(imgData1, 0, 0, 0, 0, img1.width, img1.height);
  difference.src = diffDrawer.toDataURL();
  difference.style.display = toggleOverlap3 ? 'block' : 'none';
  diffDrawer.style.display = "none";
  onResize();
}

container.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();
  let target = e.target;
  if (!target) return;
  let correspondOverlap = undefined;
  if (target === image1) {
    correspondOverlap = overlap1;
  } else if (target === image2) {
    correspondOverlap = overlap2;
  } else if (target === image3Button) {
    target = image3;
    correspondOverlap = overlap3;
  }

  const dt = e.dataTransfer;
  const { files } = dt;

  if (files.length === 1 && correspondOverlap) {
    const f = files[0];
    if (f) {
      // const filelower = f.name.toLowerCase();
      const filenamelist = f.name.split('.');
      const ext = filenamelist[filenamelist.length - 1].toLowerCase();
      if (ext === 'png' || ext === 'jpg') {
        const reader = new FileReader();
        reader.addEventListener('load', function readTexture() {
          const url = this.result;
          readImage(url, (src) => {
            target.src = src;
            correspondOverlap.src = src;
            if (target !== image3) {
              if (target.complete) {
                make_diff(image1.src, image2.src);
              } else {
                target.onload = () => {
                  make_diff(image1.src, image2.src);
                }
              }
            } else {
              if (target.complete) {
                img3.src = src;
                img3Ratio = img3.height / img3.width;
                onResize();
              } else {
                target.onload = () => {
                  img3.src = src;
                  img3Ratio = img3.height / img3.width;
                  onResize();
                }
              }
            }
          });
        }, false);
        reader.readAsDataURL(f);
      }
    }
  }
  else if (files.length > 0) {
    for (let i = 0, max = files.length; i < max; i += 1) {
      const f = files[i];
      let srcImage;
      let overlapImage;
      if (f) {
        const filelower = f.name.toLowerCase();
        if (filelower.includes('true') || filelower.includes('_gt')) {
          srcImage = image2;
          overlapImage = overlap2;
        }
        else if (filelower.includes('fake') || filelower.includes('test_image') || filelower.includes('valid')) {
          srcImage = image1;
          overlapImage = overlap1;
        }
        const filenamelist = f.name.split('.');
        const ext = filenamelist[filenamelist.length - 1].toLowerCase();
        if (ext === 'png' || ext === 'jpg') {
          const reader = new FileReader();
          reader.addEventListener('load', function readTexture() {
            const url = this.result;
            readImage(url, (src) => {
              srcImage.src = src;
              overlapImage.src = src;
              if (srcImage.complete) {
                make_diff(image1.src, image2.src);
              } else {
                srcImage.onload = () => {
                  make_diff(image1.src, image2.src);
                }
              }
            });
          }, false);
          reader.readAsDataURL(f);
        }
      }
    }
  }
}, false);

container.addEventListener('dragenter', preventDefaultEvents, false);
container.addEventListener('dragover', preventDefaultEvents, false);
container.addEventListener('dragleave', preventDefaultEvents, false);
container.addEventListener('dblclick', preventDefaultEvents, false);

try {
  make_diff(image1.src, image2.src);
} catch (e) {
  container.innerHTML = e;
}

let screenSize = [window.innerWidth, window.innerHeight];
function resizeChecker() {
  if (screenSize[0] !== window.innerWidth || screenSize[1] !== window.innerHeight) {
    screenSize = [window.innerWidth, window.innerHeight];
    onResize();
  }
}

function main(time) {
  timer = time / 1000;
  resizeChecker();
  updateScale();
  requestAnimationFrame(main);
  // console.log(overlap_div.scrollLeft, overlap_div.scrollTop);
}

function onKeyDown(e) {
  if (e.key === 'c') {
    console.log(overlap_div.scrollLeft, overlap_div.scrollTop);
  }
}

document.addEventListener('keydown', onKeyDown, false);


const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);

// console.log(urlParams);
// console.log(urlParams.get('image1'));
// console.log(urlParams.get('image2'));
// console.log(urlParams.get('image3'));

const image1File = urlParams.get('image1');
const image2File = urlParams.get('image2');
const image3File = urlParams.get('image3');

function loadParamImage(file, target, overlapTarget) {
  readImage(file, (src) => {
    target.src = src;
    overlapTarget.src = src;
    if (target !== image3) {
      if (target.complete) {
        make_diff(image1.src, image2.src);
      } else {
        target.onload = () => {
          make_diff(image1.src, image2.src);
        }
      }
    } else {
      if (target.complete) {
        img3.src = src;
        img3Ratio = img3.height / img3.width;
        onResize();
      } else {
        target.onload = () => {
          img3.src = src;
          img3Ratio = img3.height / img3.width;
          onResize();
        }
      }
    }
  });
}

if (image1File) loadParamImage(image1File, image1, overlap1);
if (image2File) loadParamImage(image2File, image2, overlap2);
if (image3File) loadParamImage(image3File, image3, overlap3);


onResize();
main();
