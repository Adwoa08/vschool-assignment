var sociaDatabase = [{
    name: {firstName: "Mike"},
    age: 3,
    favoriteBooks: ["go", "come", 24],
    friends: [
        {
            name: "Ward",
            age: 4,
            favoriteColors: ["red", "blue"]
        },
        {
            name: "Joyce",
            age: 3,
            favoriteColor: "green"
        }
    ],
    changeBook: function () {
        console.log(this.favoriteBooks.pop());
    }
}, {
    name: "Elli",
    age: 2,
    favoriteBooks: ["do", "again", 2],
    friends: [
        {
            name: "Ward",
            age: 4,
            favoriteColors: ["white", "blue"]
        },
        {
            name: "Joyce",
            age: 3,
            favoriteColor: ["green", "black"]
        }
    ],
    changeBook: function () {
        console.log(this.favoriteBooks.push());
    }
}, ["kwame", "Manu", "Menu"]];
sociaDatabase[0].favoriteBooks.pop();

console.log(sociaDatabase[0].favoriteBooks);

sociaDatabase[0].name.lastName = "OT";
console.log(sociaDatabase[0].name);

sociaDatabase[1].friends[0].favoriteColors.push("terry", "jaclyn");
console.log(sociaDatabase[1].friends[0].favoriteColors);

sociaDatabase.push(["who", "why"]);
console.log(sociaDatabase);