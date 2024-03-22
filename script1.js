const { data } = require("./data");

const {departments} = data;

for(let i = 0; i < departments.length; i++) {
    const {name} = departments[i];
    console.log(name);
}