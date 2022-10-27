// Constant pulling from the lib folder
const Intern = require("../lib/Intern");

test("Create school.", () => {
    const testSchool = "School Name";
    const employeeSample = new Intern("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testSchool);
    expect(employeeSample.school).toBe(testSchool);
});

test("Test if officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeSample = new Intern("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testSchool);
    expect(employeeSample.getSchool()).toBe(testSchool);
});

test("Test role.", () => {
    const returnValue = "Intern";
    const employeeSample = new Intern("Mahmoud", 1, "khalilmahmoud2333@gmail.com", "School Name");
    expect(employeeSample.getRole()).toBe(returnValue);
});