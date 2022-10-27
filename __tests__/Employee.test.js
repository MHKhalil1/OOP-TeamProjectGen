// Constant pulling from the lib folder
const Employee = require("../lib/Employee");

test("Create a new employee.", () => {
    const employeeSample = new Employee();
    expect(typeof(employeeSample)).toBe("object");
})

test("Test name.", () => {
    const name = "Mahmoud";
    const employeeSample = new Employee(name);
    expect(employeeSample.name).toBe(name);
})

test("Test ID.", () => {
    const id = 1;
    const employeeSample = new Employee("Mahmoud", id);
    expect(employeeSample.id).toBe(id);
})

test("Test email.", () => {
    const email = "khalilmahmoud2333@gmail.com";
    const employeeSample = new Employee("Mahmoud", 1, email);
    expect(employeeSample.email).toBe(email);
})

test("Name through getName method.", () => {
    const testName = "Mahmoud";
    const employeeSample = new Employee(testName);
    expect(employeeSample.getName()).toBe(testName);
})

test("Test ID through getID method.", () => {
    const testID = 1;
    const employeeSample = new Employee("Mahmoud", testID);
    expect(employeeSample.getId()).toBe(testID);
})

test("Test email through getEmail method.", () => {
    const testEmail = "khalilmahmoud2333@gmail.com";
    const employeeSample = new Employee("Mahmoud", 1, testEmail);
    expect(employeeSample.getEmail()).toBe(testEmail);
})

test("Test role.", () => {
    const returnValue = "Employee";
    const employeeSample = new Employee("Mahmoud", 1, "khalilmahmoud2333@gmail.com");
    expect(employeeSample.getRole()).toBe(returnValue);
})