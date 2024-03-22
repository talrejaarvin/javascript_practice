const { data } = require("./data");

const {departments} = data;

for(let i=0; i<departments.length; i++) {
    if(departments[i].name === "Children's Literature") {
        console.log(departments[i].contactNumber);
    }
    
}