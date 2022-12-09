const person = { name: "Hou", title: "software engineer" };
const personalInfo = { age: 32, location: "Brooklyn, NY" };

// spread operator is used to unpack the collected elements into a new object
const employee = {
  id: 1,
  ...person,
  ...personalInfo
};

const temp = {
    ...person,
    ...personalInfo
}

console.log(employee);

console.log(temp);