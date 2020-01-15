
class Singleton {
    private static singleton: Singleton;
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    }
}

function show(): void {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log("two singletons are equivalent");
    } else {
        console.log("two singletons are not equivalent");
    }
}

show();
