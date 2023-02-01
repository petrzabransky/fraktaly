class Tree extends Fractal {
  constructor(id) {
    super(id);
  }

  // Seting parameters of sliders
  setElementParameters() {
    this.inpAngle.min = "0";
    this.inpAngle.max = "90";
    this.inpAngle.value = "30";

    this.inpLength.min = "10";
    this.inpLength.max = "70";
    this.inpLength.value = "60";

    this.inpRandom.min = "0";
    this.inpRandom.max = "50";
    this.inpRandom.value = "20";
  }

  // Drawing fractal on canvas
  draw() {
    const line = (r1, angA, angR, lenA) => {
      let r2 = r1.getPointByAngle(angA, angR, lenA);
      // Draw line on canvas
      this.context.beginPath();
      this.context.strokeStyle = "#fff";
      this.context.moveTo(r1.x, r1.y);
      this.context.lineTo(r2.x, r2.y);
      this.context.stroke();

      if (lenA < 2) return;

      else {
        line(r2, angA + angR, this.randomize(angR), lenA * this.randomize(lengthCoef));
        line(r2, angA + angR, this.randomize(-angR), lenA * this.randomize(lengthCoef));
      }
    }

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let angleActual = 180; // Angle of actual line 0 - down, 90 - right
    let angleOfRotation = parseInt(this.inpAngle.value); // Angle of rotation next line
    let lengthActual = this.canvas.height / 6; // Length of actual line. Begin % from canvas height.
    let lengthCoef = (parseInt(this.inpLength.value)) / 100;


    let p1 = new Point(this.canvas.width / 2, this.canvas.height * 0.9); // Start point of line
    let p2 = p1.getPointByAngle(angleActual, 0, lengthActual);
    // Draw root
    this.context.beginPath();
    this.context.strokeStyle = "#fff";
    this.context.moveTo(p1.x, p1.y);
    this.context.lineTo(p2.x, p2.y);
    this.context.stroke();

    p1 = p2;

    line(p1, angleActual, this.randomize(angleOfRotation), this.randomize(lengthActual));
    line(p1, angleActual, this.randomize(-angleOfRotation), this.randomize(lengthActual));



  }
}

