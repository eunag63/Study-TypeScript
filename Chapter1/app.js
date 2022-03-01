var id = 123;
var names = "min";
var course = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
function getPerson(id, names, course) {
    return { id: 123, names: "un", course: true };
}
function savePerson(person) {
    // person.course=false;
}
savePerson({ id: 222, names: "kim", course: true, gender: 'male' });
var someValue = 5;
someValue = 'hello';
someValue = true;
