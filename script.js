var currentPosition = 4;

function bodyOnKeyDown (event) {
  console.log(event.key);
  var boxes = document.getElementsByClassName('box');
  var character = document.createTextNode('X');
  var newh1 = document.createElement('h1');
      newh1.appendChild(character);
  if (currentPosition === 0) {
    if (event.key === 'ArrowRight') {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        boxes[currentPosition + 1].appendChild(newh1);
        currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 1) {
    if (event.key === 'ArrowRight') {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        boxes[currentPosition + 1].appendChild(newh1);
        currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 2) {
    if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 3) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }
  }else if (currentPosition === 4) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }else {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 5) {
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowDown') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }
  }else if (currentPosition === 6) {
    console.log(currentPosition);
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
  }else if (currentPosition === 7) {
    console.log(currentPosition);
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }
  }else if (currentPosition === 7) {
    console.log(currentPosition);
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }else if (event.key === 'ArrowRight') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }
  }else if (currentPosition === 8) {
    console.log(currentPosition);
    if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
  }
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
