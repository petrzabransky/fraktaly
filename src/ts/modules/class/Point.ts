export class Point {
  public x: number;
  public y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Return new point define by vector (start point, start angle, angle plus, length)
  getPointByAngle(startAngle: number, angle: number, length: number): Point {
    const x: number = Math.sin((startAngle + angle) * (3.14 / 180)) * length + this.x;
    const y: number = Math.cos((startAngle + angle) * (3.14 / 180)) * length + this.y;

    return new Point(x, y);
  }
}
