const { data } = require("./data");

const { catalog } = data;

let flag = true;

for (let i = 0; i < catalog.length; i++) {
    console.log(catalog[i].title);
    if (catalog[i].title === "Introduction to Algorithms" && catalog[i].availability === false) {
        flag = false;
        console.log("trueeeeeeeee");
        break;

    }
    else {
        flag = true;
    }
}

console.log(flag);

if (flag) {
    console.log("Yes, it's available");
}
else {
    console.log("not available");

}