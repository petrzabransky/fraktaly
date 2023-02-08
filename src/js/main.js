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
System.register("modules/Point", [], function (exports_1, context_1) {
    "use strict";
    var Point;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Point = (function () {
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
            exports_1("Point", Point);
        }
    };
});
System.register("modules/Fractal", ["modules/Point"], function (exports_2, context_2) {
    "use strict";
    var Point_1, Fractal;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Point_1_1) {
                Point_1 = Point_1_1;
            }
        ],
        execute: function () {
            Fractal = (function () {
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
                    var p1 = new Point_1.Point(30, this.canvas.height * 0.6);
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
            exports_2("Fractal", Fractal);
        }
    };
});
System.register("modules/Tree", ["modules/Point", "modules/Fractal"], function (exports_3, context_3) {
    "use strict";
    var Point_2, Fractal_1, Tree;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Point_2_1) {
                Point_2 = Point_2_1;
            },
            function (Fractal_1_1) {
                Fractal_1 = Fractal_1_1;
            }
        ],
        execute: function () {
            Tree = (function (_super) {
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
                    var p1 = new Point_2.Point(this.canvas.width / 2, this.canvas.height * 0.9);
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
            }(Fractal_1.Fractal));
            exports_3("Tree", Tree);
        }
    };
});
System.register("main", ["modules/Fractal", "modules/Tree"], function (exports_4, context_4) {
    "use strict";
    var Fractal_js_1, Tree_js_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (Fractal_js_1_1) {
                Fractal_js_1 = Fractal_js_1_1;
            },
            function (Tree_js_1_1) {
                Tree_js_1 = Tree_js_1_1;
            }
        ],
        execute: function () {
            document.querySelector(".nav__hamburger").addEventListener("click", function () {
                var menu = document.querySelector(".nav__menu");
                var hamburger = document.querySelector(".nav__hamburger");
                if (menu.classList.contains("nav__menu--active")) {
                    menu.classList.remove("nav__menu--active");
                    hamburger.setAttribute("src", "./img/ikony/hamburger.svg");
                }
                else {
                    menu.classList.add("nav__menu--active");
                    hamburger.setAttribute("src", "./img/ikony/zavrit.svg");
                }
            });
            new Fractal_js_1.Fractal("spiral");
            new Tree_js_1.Tree("tree");
        }
    };
});
//# sourceMappingURL=main.js.map