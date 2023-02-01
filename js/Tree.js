class Tree extends Fractal {
  constructor(id) {
    super(id);
  }

  // Drawing fractal on canvas
  draw() {
    this.context.fillStyle = "#888";
    this.context.fillRect(50, 50, 100, 100);
  }
}
