const Manager = require("../lib/Manager");

test("Create a office number.", () => {
    const testOfficeNumber = 1;
    const employeeSample = new Manager("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testOfficeNumber);
    expect(employeeSample.officeNumber).toBe(testOfficeNumber);
});

test("Test if officeNumber returns office number.", () => {
    const testOfficeNumber = 1;
    const employeeSample = new Manager("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testOfficeNumber);
    expect(employeeSample.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Test role.", () => {
    const returnValue = "Manager";
    const employeeSample = new Manager("Mahmoud", 1, "khalilmahmoud2333@gmail.com", 1);
    expect(employeeSample.getRole()).toBe(returnValue);
});