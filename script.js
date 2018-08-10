var currentPosition = 4;

function bodyOnKeyDown (event) {
  console.log(event.key);
  var boxes = document.getElementsByClassName('box');
  var character = document.createTextNode('X');
  var newh1 = document.createElement('h1');
      newh1.appendChild(character);
  var box0 = document.getElementById('0');
  var box1 = document.getElementById('1');
  var box2 = document.getElementById('2');
  var box3 = document.getElementById('3');
  var box4 = document.getElementById('4');
  var box5 = document.getElementById('5');
  var box6 = document.getElementById('6');
  var box7 = document.getElementById('7');
  var box8 = document.getElementById('8');
  var imgDiv = document.createElement('img');
  var srcImgAttr = document.createAttribute('src');
  var valSrcImgOrange = 'hacktiv8_logo.png';
  var valSrcImgBlack = 'hacktiv8 logo.png';
      srcImgAttr.value = valSrcImgOrange;
      imgDiv.setAttributeNode(srcImgAttr);
  //     body.appendChild(imgDiv)

  if (currentPosition === 0) {
    if (event.key === 'ArrowRight') {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        box1.appendChild(imgDiv);
        currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        box3.appendChild(imgDiv);
        currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 1) {
    if (event.key === 'ArrowRight') {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        box2.appendChild(imgDiv);
        currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box4.appendChild(imgDiv);
      currentPosition = currentPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box0.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 2) {
    if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box1.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box5.appendChild(imgDiv);
      currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 3) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box0.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box4.appendChild(imgDiv);
      currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box6.appendChild(imgDiv);
      currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 4) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box1.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box5.appendChild(imgDiv);
      currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box7.appendChild(imgDiv);
      currentPosition = currentPosition + 3;
    }else {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box3.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 5) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box2.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box8.appendChild(imgDiv);
      currentPosition = currentPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box4.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 6) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box3.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box7.appendChild(imgDiv);
      currentPosition = currentPosition + 1;
    }
  }else if (currentPosition === 7) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box4.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box6.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box8.appendChild(imgDiv);
      currentPosition = currentPosition + 1;
    }
  }else {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box5.appendChild(imgDiv);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      box7.appendChild(imgDiv);
      currentPosition = currentPosition - 1;
    }
  }
}

  // if (event.key === 'ArrowRight') {
  //     boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
  //     boxes[currentPosition + 1].appendChild(newh1);
  //     currentPosition = currentPosition + 1;
  // }else if (event.key === 'ArrowLeft') {
  //     boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
  //     boxes[currentPosition - 1].appendChild(newh1);
  //     currentPosition = currentPosition - 1;
  // }else if (event.key === 'ArrowUp') {
  //     boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
  //     boxes[currentPosition - 3].appendChild(newh1);
  //     currentPosition = currentPosition - 3;
  // }else{
  //     boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
  //     boxes[currentPosition + 3].appendChild(newh1);
  //     currentPosition = currentPosition + 3;
  // }

// var body = document.body;
// console.log(body);
// var bodyChild = document.getElementById('canvas')
// console.log(bodyChild);
// var divChild = bodyChild.children;
// console.log(divChild);
// var imgDiv = document.createElement('img');
// var srcImgAttr = document.createAttribute('src');
// var srcImgTxtNode = document.createTextNode('hacktiv8 logo.png');
// srcImgAttr.value = 'hacktiv8 logo.png';
// imgDiv.setAttributeNode(srcImgAttr);
// body.appendChild(imgDiv)
