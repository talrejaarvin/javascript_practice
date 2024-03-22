const { data } = require("./data");

const {departments} = data;

for(let i=0; i<departments.length; i++) {
    if(departments[i].name == "Reference")
    console.log(departments[i].manager.firstName, departments[i].manager.lastName );
}