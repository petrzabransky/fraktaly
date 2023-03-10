import { Point } from "./Point";

export class Fractal {
  protected id: string;
  protected element: HTMLElement;
  protected box: HTMLDivElement;
  protected inpLength: HTMLInputElement;
  protected inpAngle: HTMLInputElement;
  protected inpRandom: HTMLInputElement;
  protected btnReset: HTMLInputElement;
  protected canvas: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D;

  public constructor(id: string) {
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

  setCanvasSize(): void {
    // Seting canvas size on value of his parent element
    this.canvas.width = this.box.clientWidth;
    this.canvas.height = this.box.clientWidth;
  }

  setEvents(): void {
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

  setElementParameters(): void {
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

  init(): void {
    this.setCanvasSize();
    this.setElementParameters();
    this.setEvents();
  }

  // Returns value adjusted for random variance
  randomize(num: number): number {
    let inp: number = parseInt(this.inpRandom.value);
    let rnd: number = 1 + ((Math.random() * (2 * inp)) - inp) / 100;
    return num * rnd;
  }

  // Drawing fractal on canvas
  draw(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let angleActual: number = 180; // Angle of actual line 0 - down, 90 - right
    let angleOfRotation: number = parseInt(this.inpAngle.value); // Angle of rotation next line
    let lengthActual: number = this.canvas.height / 20; // Length of actual line. Begin % from canvas height.
    let lengthCoef: number = (parseInt(this.inpLength.value) / 10 + 90) / 100; // Length coefficient. E.g. 0.9. Next line will be long 0.9 x last line. Input is 10-90, coef will be 0.90-0.99.

    let p1: Point = new Point(30, this.canvas.height * 0.6); // Start point of line

    while (lengthActual > 1) {
      let p2: Point = p1.getPointByAngle(angleActual, -this.randomize(angleOfRotation), this.randomize(lengthActual)); // End point of line

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

