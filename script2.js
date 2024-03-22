const { data } = require("./data");

const {catalog} = data;

for(let i=0; i<catalog.length; i++) {

    const {title} =  catalog[i]
    //console.log(catalog[i].title);
    console.log(title);
}