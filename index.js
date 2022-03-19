let out = document.querySelectorAll(".out");
let button = document.querySelector(".go");
let helloText = document.querySelector(".hi");
let id1 = document.querySelector("#id1");
let id2 = document.querySelector("#id2");
let id3 = document.querySelector("#id3");
let id4 = document.querySelector("#id4");
let id5 = document.querySelector("#id5");
let id6 = document.querySelector("#id6");
let id7 = document.querySelector("#id7");
let id8 = document.querySelector("#id8");
let id9 = document.querySelector("#id9");
let id10 = document.querySelector("#id10");
let id11 = document.querySelector("#id11");
let id12 = document.querySelector("#id12");

let DistanceForEach = 1000;
let startMessage = " Поехали";

function goId1() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id1.style.left = pos + "px";
    }
  }
}
function goId2() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id2.style.left = pos + "px";
    }
  }
}

function goId3() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id3.style.left = pos + "px";
    }
  }
}

function goId4() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id4.style.left = pos + "px";
    }
  }
}

function goId5() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id5.style.left = pos + "px";
    }
  }
}

function goId6() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id6.style.left = pos + "px";
    }
  }
}

function goId7() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id7.style.left = pos + "px";
    }
  }
}

function goId8() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id8.style.left = pos + "px";
    }
  }
}

function goId9() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id9.style.left = pos + "px";
    }
  }
}

function goId10() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id10.style.left = pos + "px";
    }
  }
}

function goId11() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id11.style.left = pos + "px";
    }
  }
}

function goId12() {
  let speed = Math.random() * (0.4 - 0.1) + 0.1;
  console.log(speed);
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos >= DistanceForEach) {
      clearInterval(id);
    } else {
      pos = pos + speed;
      id12.style.left = pos + "px";
    }
  }
}

function go() {
  let arr = [3, 2, 1, 0];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      if (i < 3) {
        helloText.textContent = arr[i];
        console.log(i);
      } else {
        helloText.textContent = `${startMessage}`;
      }
    }, i * 1000);
  }

  setTimeout(clearHello, 4000);
  setTimeout(goId1, 4000);
  setTimeout(goId2, 4000);
  setTimeout(goId3, 4000);
  setTimeout(goId4, 4000);
  setTimeout(goId5, 4000);
  setTimeout(goId6, 4000);

  //   goId7();
  //   goId8();
  //   goId9();
  //   goId10();
  //   goId11();
  //   goId12();
  //
}

function clearHello() {
  helloText.textContent = "";
  console.log("cleared");
}

button.addEventListener("click", go);

// function isToday(date) {
//   let time = new Date();
//   out.textContent = date == time.toDateString() ? true : false;

//   console.log(time.toDateString());
// }

// isToday(`Thu Mar 17 2022`);
// let a = "Hello World";
// let b = a.split("").reverse().join("");

// for (let i = 0; i < b.length; i++) {
//   setTimeout(() => {
//     out.textContent += b[i];
//   }, i * 300);
// }

// function oddCount(n) {
//   let a = 0;
//   for (let i = 0; i < n; i++) {
//     if (i % 2 !== 0) {
//       a++;
//       out.textContent = a;
//     }
//   }
// }

/// const oddCount = n => Math.floor(n/2) ; //решается так

// oddCount(7);

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 !== flower2 % 2) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }

// function lovefunc(flower1, flower2) {
//   let a, b;

//   if (flower1 % 2 == 0) {
//     a = true;
//   }
//   if (flower2 % 2 == 0) {
//     b = true;
//   }
//   if (a === b) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// lovefunc(2, 2);

// let arr = [`H`, `E`, `L`, `L`, `O`, ` `, `W`, `O`, `R`, `L`, `D`];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let word = 0;

// arr.forEach((item, i) => {
//   word = arr[Math.floor(Math.random() * arr.length)];

//   setTimeout(() => {
//     out.textContent += word;
//   }, i * 500);
// });

// let newArray = arr.map((element, index) => {
//   element = arr[Math.floor(Math.random() * arr.length)];
//   setTimeout(() => {
//     out.textContent += element;
//   }, index * 500);
// });

// function wrap(value) {
//   let a = {
//     value,
//   };
//   return a;
// }

// wrapper_obj = wrap(123);

// function powersOfTwo(n) {
//   let arr = [];
//   let a = 0;
//   for (let i = 0; i <= n; i++) {
//     a = Math.pow(2, i);
//     arr.push(a);
//   }

//   return arr;
// }

// out.textContent = powersOfTwo(5);
