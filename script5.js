const { data } = require("./data");

const {catalog} = data;

catalog.push({
    title: "Introduction to Computer Science",
    author: "haryyyy",
    isbn: "0987654444",
    availability: true,
    category: ["Technology", "Education"],
})

console.log(data);