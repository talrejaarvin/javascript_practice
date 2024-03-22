const { data } = require("./data");

const {catalog} = data; 
let newCategories = [];
for(let i=0; i<catalog.length; i++) {
    for(let k=0; k<catalog[i].category.length; k++){
        if(!newCategories.includes(catalog[i].category[k])){
            newCategories.push(catalog[i].category[k]);

        
    }
    // console.log(catalog[i].category[k]);
}
}

console.log(newCategories.toString());

