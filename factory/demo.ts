/**
 * 工厂方法模式包含一下角色：
 *
 * Product:抽象产品
 * ConcreteProduct:具体产品
 * Factory:抽象工厂
 * ConcreteFactory:具体工厂
 *
*/

// 定义Product接口 抽象产品
export interface Product {
    use(param?: any): void;
}

// 创建 ConcreteProductA 类 具体产品
export class ConcreteProductA implements Product {
    use(params?: any) {
        console.log('ConcreteProductA 的use方法被调用！');
    }
}

// 创建 ConcreteProductB 类 具体产品
export class ConcreteProductB implements Product {
    use(params?: any) {
        console.log('ConcreteProductB 的use方法被调用！');
    }
}

// 定义 Factory 抽象类 抽象工厂
export abstract class Factory {
    abstract createProduct(type: string): Product;
}

// 创建ConcreteFactory类 创建具体工厂
export class ConcreteFactory extends Factory {
    createProduct(type: string): Product {
        if (type === 'A') {
            return new ConcreteProductA();
        } else if (type === 'B') {
            return new ConcreteProductB();
        }
        return null;
    }
}


// demo

export function show(): void {
    const productFactory: ConcreteFactory = new ConcreteFactory();
    const productA: Product = productFactory.createProduct('A');
    const productB: Product = productFactory.createProduct('B');

    productA.use();
    productB.use();
}

show();
