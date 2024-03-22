const { data } = require("./data");

const { catalog } = data;

let isBookAvailable = false;

for (let i = 0; i < catalog.length; i++) {
    console.log(catalog[i].title);
    if (catalog[i].title === "Introduction to Algorithms") {
        isBookAvailable = catalog[i].availability;
        break;
    }
}

console.log(isBookAvailable);

if (!isBookAvailable) {
    console.log("not available");
}
else {
    console.log("Yes, it's available");
}