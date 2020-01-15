/**
 * 抽象工厂模式包含以下角色：
 * AbstractFactory: 抽象工厂
 * ConcreteFactory: 具体工厂
 * AbstractProduct: 抽象产品
 * Product: 具体产品
*/

// 定义抽象产品A
interface AbstractProductA {
    methodA(): string;
}

// 定义抽象产品B
interface AbstractProductB {
    methodB(): number;
}

// 定义抽象工厂 AbstractFactory
interface AbstractFactory {
    createProductA(param?: any): AbstractProductA;
    createProductB(): AbstractProductB;
}

// 产品类A1
class ProductA1 implements AbstractProductA {
    methodA = () => {
        return "这是ProductA1的methodA方法";
    };
}
// 产品类B1
class ProductB1 implements AbstractProductB {
    methodB = () => {
        return 1;
    };
}
// 产品类A2
class ProductA2 implements AbstractProductA {
    methodA = () => {
        return "这是ProductA2的methodA方法";
    };
}
// 产品类B1
class ProductB2 implements AbstractProductB {
    methodB = () => {
        return 2;
    };
}

// 定义具体工厂 ConcreteFactory1
class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
        return new ProductA1();
    }

    createProductB(param?: any): AbstractProductB {
        return new ProductB1();
    }
}
// 定义具体工厂 ConcreteFactory2
class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
        return new ProductA2();
    }

    createProductB(param?: any): AbstractProductB {
        return new ProductB2();
    }
}

class Tester {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.abstractProductA = factory.createProductA();
        this.abstractProductB = factory.createProductB();
    }

    public test(): void {
        console.log(this.abstractProductA.methodA());
        console.log(this.abstractProductB.methodB());
    }
}


function show() {
    // Abstract factory1
    var factory1: AbstractFactory = new ConcreteFactory1();
    var tester1: Tester = new Tester(factory1);
    tester1.test();

    // Abstract factory2
    var factory2: AbstractFactory = new ConcreteFactory2();
    var tester2: Tester = new Tester(factory2);
    tester2.test();
}

show();