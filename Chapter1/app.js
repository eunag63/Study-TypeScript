var Person = /** @class */ (function () {
    function Person(_id, _names, _course) {
        var _this = this;
        this._id = _id;
        this._names = _names;
        this._course = _course;
        this.printPerson = function () {
            console.log("".concat(_this._names, "\uB294 \uC878\uC5C5\uC744 ").concat(_this._course, "\uD588\uB2E4."));
        };
    }
    Object.defineProperty(Person.prototype, "names", {
        get: function () {
            return this._names;
        },
        set: function (value) {
            this._names = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var employee1 = new Person(2, 'kimm', false);
console.log(employee1.names);
employee1.printPerson();
