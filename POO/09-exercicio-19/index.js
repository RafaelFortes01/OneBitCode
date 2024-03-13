const Author = require("./Author");

const john = new Author("John Doe")
const post = john.writePost("Título de post", "Lorem ipsum dolor sic")

post.addComment("Rafael", "Muito bom")
post.addComment("Consilium", "Interessante")

console.log(john);
console.log(post);