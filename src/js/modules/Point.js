"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // Return new point define by vector (start point, start angle, angle plus, length)
    Point.prototype.getPointByAngle = function (startAngle, angle, length) {
        var x = Math.sin((startAngle + angle) * (3.14 / 180)) * length + this.x;
        var y = Math.cos((startAngle + angle) * (3.14 / 180)) * length + this.y;
        return new Point(x, y);
    };
    return Point;
}());
export { Point };
