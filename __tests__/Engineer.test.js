const Engineer = require("../lib/Engineer");

test("Creates a github.", () => {
    const testGithub = "MHKhalil1";
    const employeeSample = new Engineer("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testGithub);
    expect(employeeSample.github).toBe(testGithub);
});

test("Test if getGithub will return github.", () => {
    const testGithub = "MHKhalil1";
    const employeeSample = new Engineer("Mahmoud", 1, "khalilmahmoud2333@gmail.com", testGithub);
    expect(employeeSample.getGithub()).toBe(testGithub);
});

test("Test role.", () => {
    const returnValue = "Engineer";
    const employeeSample = new Engineer("Mahmoud", 1, "khalilmahmoud2333@gmail.com", "MHKhalil1");
    expect(employeeSample.getRole()).toBe(returnValue);
});