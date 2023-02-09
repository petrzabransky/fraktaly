var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Point } from "./Point.js";
import { Fractal } from "./Fractal.js";
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree(id) {
        return _super.call(this, id) || this;
    }
    Tree.prototype.setElementParameters = function () {
        this.inpAngle.min = "0";
        this.inpAngle.max = "90";
        this.inpAngle.value = "30";
        this.inpLength.min = "50";
        this.inpLength.max = "70";
        this.inpLength.value = "65";
        this.inpRandom.min = "0";
        this.inpRandom.max = "30";
        this.inpRandom.value = "20";
    };
    Tree.prototype.draw = function () {
        var _this = this;
        var line = function (r1, angA, angR, lenA) {
            var r2 = r1.getPointByAngle(angA, angR, lenA);
            _this.context.beginPath();
            _this.context.strokeStyle = "#fff";
            _this.context.lineWidth = lenA / 15;
            _this.context.moveTo(r1.x, r1.y);
            _this.context.lineTo(r2.x, r2.y);
            _this.context.stroke();
            if (lenA < 1)
                return;
            else {
                line(r2, angA + angR, _this.randomize(angR), lenA * _this.randomize(lengthCoef));
                line(r2, angA + angR, _this.randomize(-angR), lenA * _this.randomize(lengthCoef));
            }
        };
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var angleActual = 180;
        var angleOfRotation = parseInt(this.inpAngle.value);
        var lengthActual = this.canvas.height / 6;
        var lengthCoef = (parseInt(this.inpLength.value)) / 100;
        var p1 = new Point(this.canvas.width / 2, this.canvas.height * 0.9);
        var p2 = p1.getPointByAngle(angleActual, 0, lengthActual);
        this.context.beginPath();
        this.context.strokeStyle = "#fff";
        this.context.lineWidth = lengthActual / 15;
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x, p2.y);
        this.context.stroke();
        p1 = p2;
        line(p1, angleActual, this.randomize(angleOfRotation), this.randomize(lengthActual));
        line(p1, angleActual, this.randomize(-angleOfRotation), this.randomize(lengthActual));
    };
    return Tree;
}(Fractal));
export { Tree };
//# sourceMappingURL=Tree.js.map