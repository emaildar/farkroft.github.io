var currentPosition = 4;

function bodyOnKeyDown (event) {
  console.log(event.key);
  var boxes = document.getElementsByClassName('box');
  var character = document.createTextNode('X');
  var newh1 = document.createElement('h1');
      newh1.appendChild(character);

  if (event.key === 'ArrowRight') {
    if (currentPosition !== 8) {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }
  }else if (event.key === 'ArrowLeft') {
    if (currentPosition !== 0) {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }
  }else if (event.key === 'ArrowUp') {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 3].appendChild(newh1);
      currentPosition = currentPosition - 3;
  }else{
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 3].appendChild(newh1);
      currentPosition = currentPosition + 3;
  }
}
var body = document.body;
console.log(body);
var bodyChild = document.getElementById('canvas')
console.log(bodyChild);
var divChild = bodyChild.children;
console.log(divChild);
