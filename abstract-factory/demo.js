var ProductA1 = /** @class */ (function () {
    function ProductA1() {
        this.methodA = function () {
            return "这是ProductA1的methodA方法";
        };
    }
    return ProductA1;
}());
var ProductB1 = /** @class */ (function () {
    function ProductB1() {
        this.methodB = function () {
            return 1;
        };
    }
    return ProductB1;
}());
var ProductA2 = /** @class */ (function () {
    function ProductA2() {
        this.methodA = function () {
            return "这是ProductA2的methodA方法";
        };
    }
    return ProductA2;
}());
var ProductB2 = /** @class */ (function () {
    function ProductB2() {
        this.methodB = function () {
            return 2;
        };
    }
    return ProductB2;
}());
var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function (param) {
        return new ProductA1();
    };
    ConcreteFactory1.prototype.createProductB = function (param) {
        return new ProductB1();
    };
    return ConcreteFactory1;
}());
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function (param) {
        return new ProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function (param) {
        return new ProductB2();
    };
    return ConcreteFactory2;
}());
var Tester = /** @class */ (function () {
    function Tester(factory) {
        this.abstractProductA = factory.createProductA();
        this.abstractProductB = factory.createProductB();
    }
    Tester.prototype.test = function () {
        console.log(this.abstractProductA.methodA());
        console.log(this.abstractProductB.methodB());
    };
    return Tester;
}());
function show() {
    // Abstract factory1
    var factory1 = new ConcreteFactory1();
    var tester1 = new Tester(factory1);
    tester1.test();
    // Abstract factory2
    var factory2 = new ConcreteFactory2();
    var tester2 = new Tester(factory2);
    tester2.test();
}
show();
