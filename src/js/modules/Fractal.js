import { Point } from "./Point.js";
var Fractal = /** @class */ (function () {
    function Fractal(id) {
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
    Fractal.prototype.setCanvasSize = function () {
        // Seting canvas size on value of his parent element
        this.canvas.width = this.box.clientWidth;
        this.canvas.height = this.box.clientWidth;
    };
    Fractal.prototype.setEvents = function () {
        var _this = this;
        // Redraw fractal after change value on sliders
        this.inpAngle.addEventListener("input", function () {
            _this.draw();
        });
        this.inpLength.addEventListener("input", function () {
            _this.draw();
        });
        this.inpRandom.addEventListener("input", function () {
            _this.draw();
        });
        // Seting canvas size after resize window
        window.addEventListener("resize", function () {
            _this.setCanvasSize();
            _this.draw();
        });
        // Reset sliders values to default
        this.btnReset.addEventListener("click", function () {
            _this.setElementParameters();
            _this.draw();
        });
    };
    Fractal.prototype.setElementParameters = function () {
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
    };
    Fractal.prototype.init = function () {
        this.setCanvasSize();
        this.setElementParameters();
        this.setEvents();
    };
    // Returns value adjusted for random variance
    Fractal.prototype.randomize = function (num) {
        var inp = parseInt(this.inpRandom.value);
        var rnd = 1 + ((Math.random() * (2 * inp)) - inp) / 100;
        return num * rnd;
    };
    // Drawing fractal on canvas
    Fractal.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var angleActual = 180; // Angle of actual line 0 - down, 90 - right
        var angleOfRotation = parseInt(this.inpAngle.value); // Angle of rotation next line
        var lengthActual = this.canvas.height / 20; // Length of actual line. Begin % from canvas height.
        var lengthCoef = (parseInt(this.inpLength.value) / 10 + 90) / 100; // Length coefficient. E.g. 0.9. Next line will be long 0.9 x last line. Input is 10-90, coef will be 0.90-0.99.
        var p1 = new Point(30, this.canvas.height * 0.6); // Start point of line
        while (lengthActual > 1) {
            var p2 = p1.getPointByAngle(angleActual, -this.randomize(angleOfRotation), this.randomize(lengthActual)); // End point of line
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
    };
    return Fractal;
}());
export { Fractal };
