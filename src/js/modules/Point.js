"use strict";
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getPointByAngle = function (startAngle, angle, length) {
        var x = Math.sin((startAngle + angle) * (3.14 / 180)) * length + this.x;
        var y = Math.cos((startAngle + angle) * (3.14 / 180)) * length + this.y;
        return new Point(x, y);
    };
    return Point;
}());
export { Point };
//# sourceMappingURL=Point.js.map