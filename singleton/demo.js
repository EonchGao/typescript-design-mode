var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    return Singleton;
}());
function show() {
    var singleton1 = Singleton.getInstance();
    var singleton2 = Singleton.getInstance();
    if (singleton1 === singleton2) {
        console.log("two singletons are equivalent");
    }
    else {
        console.log("two singletons are not equivalent");
    }
}
show();
