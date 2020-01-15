// Prototype接口
export interface Prototype {
    clone(): Prototype;
    toString(): string;
}

// Concrete
export class Concrete1 implements Prototype {

    clone(): Prototype {
        return new Concrete1();
    }

    toString(): string {
        return '这是Concrete1';
    }
}
export class Concrete2 implements Prototype {

    clone(): Prototype {
        return new Concrete2();
    }

    toString(): string {
        return '这是Concrete2';
    }
}
export class Concrete3 implements Prototype {

    clone(): Prototype {
        return new Concrete3();
    }

    toString(): string {
        return '这是Concrete3';
    }
}

// Builder
export class Builder {
    private prototypeMap: { [s: string]: Prototype } = {};
    constructor() {
        this.prototypeMap['c1'] = new Concrete1();
        this.prototypeMap['c2'] = new Concrete2();
        this.prototypeMap['c3'] = new Concrete3();
    }
    createOne(s: string): Prototype {
        return this.prototypeMap[s].clone(); // 拷贝原型创建新对象
    }
}

// demo
export function show() {
    let builder: Builder = new Builder();
    for (let i = 1; i <= 3; i++) {
        console.log(builder.createOne('c' + i).toString());
    }
}

show();