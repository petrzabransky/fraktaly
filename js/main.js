"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Return new point define by vector (start point, start angle, angle plus, length)
  getPointByAngle(startAngle, angle, length) {
    const x = Math.sin((startAngle + angle) * (3.14 / 180)) * length + this.x;
    const y = Math.cos((startAngle + angle) * (3.14 / 180)) * length + this.y;

    return new Point(x, y);
  }
}

class Fractal {
  constructor(id) {
    this.id = id;

    this.element = document.getElementById(this.id); //Root element of Component

    // Canvas
    this.canvas = this.element.querySelector(".fractal__canvas");
    this.context = this.canvas.getContext("2d");
    this.box = this.element.querySelector(".fractal__box");

    // Inputs (ranges)
    this.inpLength = this.element.querySelector(".fractal__length");
    this.inpAngle = this.element.querySelector(".fractal__angle");
    this.inpRandom = this.element.querySelector(".fractal__random");

    // Buttons
    this.btnReset = this.element.querySelector(".fractal__reset");

    // Metods on start
    this.init(); // Initialize variables, setup canvas etc.
    this.draw(); // Draw fractal on canvas
  }

  setCanvasSize() {
    // Seting canvas size on value of his parent element
    this.canvas.width = this.box.clientWidth;
    this.canvas.height = this.box.clientWidth;
  }

  setEvents() {
    // Redraw fractal after change value on sliders
    this.inpAngle.addEventListener("input", () => {
      this.draw();
    });
    this.inpLength.addEventListener("input", () => {
      this.draw();
    });
    this.inpRandom.addEventListener("input", () => {
      this.draw();
    });

    // Seting canvas size after resize window
    window.addEventListener("resize", () => {
      this.setCanvasSize();
      this.draw();
    });

    // Reset sliders values to default
    this.btnReset.addEventListener("click", () => {
      this.setElementParameters();
      this.draw();
    });
  }

  setElementParameters() {
    // Seting parameters of sliders
    this.inpAngle.min = "0";
    this.inpAngle.max = "40";
    this.inpAngle.value = "10";

    this.inpLength.min = "30";
    this.inpLength.max = "90";
    this.inpLength.value = "80";

    this.inpRandom.min = "0";
    this.inpRandom.max = "100";
    this.inpRandom.value = "0";
  }

  init() {
    this.setCanvasSize();
    this.setElementParameters();
    this.setEvents();
  }

  // Returns value adjusted for random variance
  randomize(num) {
    let inp = parseInt(this.inpRandom.value);
    let rnd = 1 + ((Math.random() * (2 * inp)) - inp) / 100;
    return num * rnd;
  }

  // Drawing fractal on canvas
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let angleActual = 180; // Angle of actual line 0 - down, 90 - right
    let angleOfRotation = parseInt(this.inpAngle.value); // Angle of rotation next line
    let lengthActual = this.canvas.height / 20; // Length of actual line. Begin % from canvas height.
    let lengthCoef = (parseInt(this.inpLength.value) / 10 + 90) / 100; // Length coefficient. E.g. 0.9. Next line will be long 0.9 x last line. Input is 10-90, coef will be 0.90-0.99.

    let p1 = new Point(30, this.canvas.height * 0.6); // Start point of line

    while (lengthActual > 1) {
      let p2 = p1.getPointByAngle(angleActual, -this.randomize(angleOfRotation), this.randomize(lengthActual)); // End point of line

      // Draw line on canvas
      this.context.beginPath();
      this.context.strokeStyle = "#fff";
      this.context.lineWidth = lengthActual / 5;
      this.context.moveTo(p1.x, p1.y);
      this.context.lineTo(p2.x, p2.y);
      this.context.closePath();
      this.context.stroke();

      p1 = p2; // Start point next line is end point of last line

      lengthActual *= lengthCoef; // Length of next line will be shorter
      angleActual -= angleOfRotation; // Actual angle rotate with angle of rotation
    }
  }
}

class Tree extends Fractal {
  constructor(id) {
    super(id);
  }

  // Seting parameters of sliders
  setElementParameters() {
    this.inpAngle.min = "0";
    this.inpAngle.max = "90";
    this.inpAngle.value = "30";

    this.inpLength.min = "50";
    this.inpLength.max = "70";
    this.inpLength.value = "65";

    this.inpRandom.min = "0";
    this.inpRandom.max = "30";
    this.inpRandom.value = "20";
  }

  // Drawing fractal on canvas
  draw() {
    const line = (r1, angA, angR, lenA) => { // Start point, actual angle, angle of rotation, actual length
      let r2 = r1.getPointByAngle(angA, angR, lenA); // End point of line
      // Drawing line on canvas
      this.context.beginPath();
      this.context.strokeStyle = "#fff";
      this.context.lineWidth = lenA / 15;   // Width of branch
      this.context.moveTo(r1.x, r1.y);
      this.context.lineTo(r2.x, r2.y);
      this.context.stroke();

      // Recursive drawing loop
      if (lenA < 1) return;  // If branch length < 1, end loop

      else {
        line(r2, angA + angR, this.randomize(angR), lenA * this.randomize(lengthCoef)); // Left branch - recursive
        line(r2, angA + angR, this.randomize(-angR), lenA * this.randomize(lengthCoef));  // Right branch - recursive 
      }
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Cleaning canvas on start drawing

    let angleActual = 180; // Angle of actual line 0 - down, 90 - right
    let angleOfRotation = parseInt(this.inpAngle.value); // Angle of rotation next line
    let lengthActual = this.canvas.height / 6; // Length of actual line. Begin % from canvas height.
    let lengthCoef = (parseInt(this.inpLength.value)) / 100;
    let p1 = new Point(this.canvas.width / 2, this.canvas.height * 0.9); // Start point of line
    let p2 = p1.getPointByAngle(angleActual, 0, lengthActual);  // End point of line

    // Draw root
    this.context.beginPath();
    this.context.strokeStyle = "#fff";
    this.context.lineWidth = lengthActual / 15;
    this.context.moveTo(p1.x, p1.y);
    this.context.lineTo(p2.x, p2.y);
    this.context.stroke();

    p1 = p2;  // New start point is last end point

    line(p1, angleActual, this.randomize(angleOfRotation), this.randomize(lengthActual)); // Left branch
    line(p1, angleActual, this.randomize(-angleOfRotation), this.randomize(lengthActual));  // Right branch
  }
}


//
// Components
//

// Navigation menu
document.querySelector(".nav__hamburger").addEventListener("click", () => {
  const menu = document.querySelector(".nav__menu");
  const hamburger = document.querySelector(".nav__hamburger");

  if (menu.classList.contains("nav__menu--active")) {
    menu.classList.remove("nav__menu--active");
    hamburger.src = "./img/ikony/hamburger.svg";
  } else {
    menu.classList.add("nav__menu--active");
    hamburger.src = "./img/ikony/zavrit.svg";
  }
});


//
// Start app
//

new Fractal("spiral");
new Tree("tree");
