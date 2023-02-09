import { Point } from "./Point.js";
var Fractal = (function () {
    function Fractal(id) {
        this.id = id;
        this.element = document.getElementById(this.id);
        this.canvas = this.element.querySelector(".fractal__canvas");
        this.context = this.canvas.getContext("2d");
        this.box = this.element.querySelector(".fractal__box");
        this.inpLength = this.element.querySelector(".fractal__length");
        this.inpAngle = this.element.querySelector(".fractal__angle");
        this.inpRandom = this.element.querySelector(".fractal__random");
        this.btnReset = this.element.querySelector(".fractal__reset");
        this.init();
        this.draw();
    }
    Fractal.prototype.setCanvasSize = function () {
        this.canvas.width = this.box.clientWidth;
        this.canvas.height = this.box.clientWidth;
    };
    Fractal.prototype.setEvents = function () {
        var _this = this;
        this.inpAngle.addEventListener("input", function () {
            _this.draw();
        });
        this.inpLength.addEventListener("input", function () {
            _this.draw();
        });
        this.inpRandom.addEventListener("input", function () {
            _this.draw();
        });
        window.addEventListener("resize", function () {
            _this.setCanvasSize();
            _this.draw();
        });
        this.btnReset.addEventListener("click", function () {
            _this.setElementParameters();
            _this.draw();
        });
    };
    Fractal.prototype.setElementParameters = function () {
        this.inpAngle.min = "0";
        this.inpAngle.max = "40";
        this.inpAngle.value = "10";
        this.inpLength.min = "30";
        this.inpLength.max = "90";
        this.inpLength.value = "80";
        this.inpRandom.min = "0";
        this.inpRandom.max = "100";
        this.inpRandom.value = "0";
    };
    Fractal.prototype.init = function () {
        this.setCanvasSize();
        this.setElementParameters();
        this.setEvents();
    };
    Fractal.prototype.randomize = function (num) {
        var inp = parseInt(this.inpRandom.value);
        var rnd = 1 + ((Math.random() * (2 * inp)) - inp) / 100;
        return num * rnd;
    };
    Fractal.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var angleActual = 180;
        var angleOfRotation = parseInt(this.inpAngle.value);
        var lengthActual = this.canvas.height / 20;
        var lengthCoef = (parseInt(this.inpLength.value) / 10 + 90) / 100;
        var p1 = new Point(30, this.canvas.height * 0.6);
        while (lengthActual > 1) {
            var p2 = p1.getPointByAngle(angleActual, -this.randomize(angleOfRotation), this.randomize(lengthActual));
            this.context.beginPath();
            this.context.strokeStyle = "#fff";
            this.context.lineWidth = lengthActual / 5;
            this.context.moveTo(p1.x, p1.y);
            this.context.lineTo(p2.x, p2.y);
            this.context.closePath();
            this.context.stroke();
            p1 = p2;
            lengthActual *= lengthCoef;
            angleActual -= angleOfRotation;
        }
    };
    return Fractal;
}());
export { Fractal };
//# sourceMappingURL=Fractal.js.map