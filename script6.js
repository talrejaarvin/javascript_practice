const { data } = require("./data");

const {catalog} = data;

for(let i=0;i<catalog.length;i++) {
    if(catalog[i].title === "The Great Gatsby"){
        catalog[i].availability = false;
        console.log(catalog[i]);
    }
}

