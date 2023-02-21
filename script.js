var buttons = document.querySelectorAll("#btn");
var display = document.getElementById("show");
var a = 0;
var b = null;
var c = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    //            frind data and  all mathematics  Symbol

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      c = value;
      a = parseFloat(display.textContent);
      display.textContent = "";
      return;
    }


    if (value === "%") {
      a = parseFloat(display.textContent) / 100;
      console.log('i am ',a);
      display.textContent = "";
      return;
    }

    
    // mathematics calculation
    if (c === "+") {
      b = parseFloat(display.textContent);
      if (value === "=") {
        display.textContent = a + b;
        a = null;
        b = null;
        c = null;
        return;
      }
    }

    if (c === "-") {
      b = parseFloat(display.textContent);
      if (value === "=") {
        display.textContent = a - b;
        a = null;
        b = null;
        c = null;
        return;
      }
    }

    if (c === "*") {
      b = parseFloat(display.textContent);
      if (value === "=") {
        display.textContent = a * b;
        a = null;
        b = null;
        c = null;
        return;
      }
    }
    if (c === "/") {
      b = parseFloat(display.textContent);
      if (value === "=") {
        display.textContent = a / b;
        a = null;
        b = null;
        c = null;
        return;
      }
    }

    if (value === "AC") {
      display.textContent = "";
      a = null;
      b = null;
      c = null;
      return;
    }

    if (value === "DC") {
      let str = display.textContent;
      display.textContent = str.slice(0, -1);
      return;
    }
    display.textContent += value;
  });
}

// function sorry() {
//   alert("Please do not click this button This button is in progress.⚠️❗");
// }
