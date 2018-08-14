var boardImg = ['','cut_images/image_part_001.jpg','cut_images/image_part_002.jpg','cut_images/image_part_003.jpg'
,'cut_images/image_part_004.jpg','cut_images/image_part_005.jpg','cut_images/image_part_006.jpg','cut_images/image_part_007.jpg'
,'cut_images/image_part_008.jpg'];
var board = [];

for (var i = 0; i < boardImg.length; i++) {
  board.push(boardImg[i]);
}

// FUNCTION UNTUK MENGACAK ARRAY boardImg
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
// Math.random fungsi bawaan js untuk me-random angka antara 0 dan 1
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
shuffle(boardImg);

var body = document.body;
var bodyChild = document.getElementById('canvas')
var divChild = bodyChild.children;
var divPosition = 0;

// var contentDivChild8 = divChild[8].innerHTML;
// var contentDivChild7 = divChild[7].innerHTML;
// var h1 = document.createElement('h1');
// divChild[7].appendChild(h1);
// // console.log(divChild[7].children);
// divChild[8].appendChild(h1);

// 1
// VARIABLE UNTUK SETIAP ELEMENT YANG AKAN DI appendChild HARUS BERBEDA (MANUAL COBA)
// var h1 = document.createElement('h1');
// var h2 = document.createElement('h1');
// var h3 = document.createElement('h1');
// var h1Text_0 = document.createTextNode(boardImg[0][0]);
// var h1Text_1 = document.createTextNode(boardImg[0][1]);
// var h1Text_2 = document.createTextNode(boardImg[0][2]);
// console.log(boardImg[0][2]);
// h1.appendChild(h1Text_0);
// h2.appendChild(h1Text_1);
// h3.appendChild(h1Text_2);
// divChild[0].appendChild(h1);
// divChild[1].appendChild(h2);
// divChild[2].appendChild(h3);

// 2
// LOOPING UNTUK MEMBUAT VARIABLE YANG BERBEDA
// var h_text = [];
// for (var i = 0; i < h_elem.length; i++) {
//   h_text.push('h_text'+i);
//   h_text[i] = document.createTextNode(boardImg[i]);
// }
// h_text[1] = document.createTextNode(boardImg[1]);
// for (var i = 0; i < h_text.length; i++) {
//   h_elem[i].appendChild(h_text[i]);
//   divChild[i].appendChild(h_elem[i]);
// }
// h_elem[1].appendChild(h_text[1]);
// divChild[1].appendChild(h_elem[1]);

// 3
// LOOPING UNTUK MENGISI ELEMEN boardImg KE DALAM divChild
var h_elem = [];
var h_text = [];
var h_elemTemp = '';
for (var i = 0; i < divChild.length; i++) {
  h_elem.push('h_elem'+i);
  h_elem[i] = document.createElement('img');
  h_text.push('h_text'+i);
  h_elem[i].setAttribute('src', boardImg[i]);
  divChild[i].appendChild(h_elem[i]);
}
var imgTag = document.getElementsByTagName('img')
for (var i = 0; i < imgTag.length; i++) {
  if (imgTag[i].attributes[0].nodeValue === '') {
    var imgParent = imgTag[i].parentNode;
    divPosition = imgParent.id;
  }
}

// FUNGSI UNTUK MENGECEK KONDISI KEMENANGAN
function winCondition() {
  var checkCondition = false;
  for (var i = 0; i < boardImg.length; i++) {
    if (boardImg[i] === h_elem[i].attributes.src.nodeValue) {
      checkCondition = true;
      return checkCondition;
    } else {
      checkCondition = false;
      return checkCondition;
    }
  }
}
// console.log(h_elem[0].attributes.src.nodeValue);

// FUNGSI KETIKA ARAH KANAN DITEKAN
function keyArrowRight() {
  divChild[divPosition+1].appendChild(h_elem[divPosition]);
  divChild[divPosition].appendChild(h_elem[divPosition+1]);
  h_elemTemp = h_elem[divPosition];
  h_elem[divPosition] = h_elem[divPosition+1]
  h_elem[divPosition+1] = h_elemTemp;
}
function keyArrowLeft() {
  divChild[divPosition-1].appendChild(h_elem[divPosition]);
  divChild[divPosition].appendChild(h_elem[divPosition-1]);
  h_elemTemp = h_elem[divPosition];
  h_elem[divPosition] = h_elem[divPosition-1]
  h_elem[divPosition-1] = h_elemTemp;
}
function keyArrowUp() {
  divChild[divPosition-3].appendChild(h_elem[divPosition]);
  divChild[divPosition].appendChild(h_elem[divPosition-3]);
  h_elemTemp = h_elem[divPosition];
  h_elem[divPosition] = h_elem[divPosition-3]
  h_elem[divPosition-3] = h_elemTemp;
}
function keyArrowDown() {
  divChild[divPosition+3].appendChild(h_elem[divPosition]);
  divChild[divPosition].appendChild(h_elem[divPosition+3]);
  h_elemTemp = h_elem[divPosition];
  h_elem[divPosition] = h_elem[divPosition+3]
  h_elem[divPosition+3] = h_elemTemp;
}
// MENUKAR children DARI DIV CURRENT POSITION, KARENA ISI ARRAY h_elem SUDAH OBJECT H1 SEMUA
// divChild[8].appendChild(h_elem[7]);
// divChild[7].appendChild(h_elem[8]);
function bodyOnKeyDown (event) {
  if (divPosition === 0) {
    if (event.key === 'ArrowRight') {
        keyArrowRight();
        console.log(winCondition());
        divPosition = divPosition + 1;
    }else if (event.key === 'ArrowDown') {
        keyArrowDown();
        console.log(winCondition());
        divPosition = divPosition + 3;
    }
  }else if (divPosition === 1) {
    if (event.key === 'ArrowRight') {
        keyArrowRight();
        console.log(winCondition());
        divPosition = divPosition + 1;
    }else if (event.key === 'ArrowDown') {
      keyArrowDown();
      console.log(winCondition());
      divPosition = divPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }
  }else if (divPosition === 2) {
    if (event.key === 'ArrowLeft') {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }else if (event.key === 'ArrowDown') {
      keyArrowDown();
      console.log(winCondition());
      divPosition = divPosition + 3;
    }
  }else if (divPosition === 3) {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowRight') {
      keyArrowRight();
      console.log(winCondition());
      divPosition = divPosition + 1;
    }else if (event.key === 'ArrowDown') {
      keyArrowDown();
      console.log(winCondition());
      divPosition = divPosition + 3;
    }
  }else if (divPosition === 4) {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowRight') {
      keyArrowRight();
      console.log(winCondition());
      divPosition = divPosition + 1;
    }else if (event.key === 'ArrowDown') {
      keyArrowDown();
      console.log(winCondition());
      divPosition = divPosition + 3;
    }else {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }
  }else if (divPosition === 5) {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowDown') {
      keyArrowDown();
      console.log(winCondition());
      divPosition = divPosition + 3;
    }else if (event.key === 'ArrowLeft') {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }
  }else if (divPosition === 6) {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowRight') {
      keyArrowRight();
      console.log(winCondition());
      divPosition = divPosition + 1;
    }
  }else if (divPosition === 7) {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }else if (event.key === 'ArrowRight') {
      keyArrowRight();
      console.log(winCondition());
      divPosition = divPosition + 1;
    }
  }else {
    if (event.key === 'ArrowUp') {
      keyArrowUp();
      console.log(winCondition());
      divPosition = divPosition - 3;
    }else if (event.key === 'ArrowLeft') {
      keyArrowLeft();
      console.log(winCondition());
      divPosition = divPosition - 1;
    }
  }
}
