/**
 * 建造者模式包含以下角色：
 * Builder: 抽象建造者
 * ConcreteBuilder: 具体建造者
 * Director: 指挥者
 * Product: 产品角色
*/

// 创建User类
export class User {
    private name: string;
    private age: number;
    private address: string;

    constructor(builder: UserBuilder) {
        this.name = builder.Name;
        this.age = builder.Age;
        this.address = builder.Address;
    }

    get Name() {
        return this.name;
    }
    get Age() {
        return this.age;
    }
    get Address() {
        return this.address;
    }
}

// 创建UserBuilder
export class UserBuilder {
    private name: string;
    private age: number;
    private address: string;

    constructor(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }
    setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }
    get Age() {
        return this.age;
    }
    get Address() {
        return this.address;
    }
    setAddress(value: string): UserBuilder {
        this.address = value;
        return this;
    }
    build() {
        return new User(this);
    }
}

// demo
export function show(): void {
    const user: User = new UserBuilder('EnochGao')
        .setAge(24)
        .setAddress('QingDao')
        .build();
    console.log(user.Name, user.Age, user.Address);
}
show();