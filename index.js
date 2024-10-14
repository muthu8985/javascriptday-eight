const fruit = ["mango", "apple", "banana", "papaya", "orange"];
let flen = fruit.length;
//   let text="<ul> "
let text = " ";
for (let i = 0; i < flen; i++) {
  // text += " <li>"+fruit[i]+"</li>";
  text += fruit[i];
}
// text +="</ul>";
text += " ";
document.getElementById("demo").innerHTML = text;
//  the codes that i have commended are to make the element order

// adding array elements
const language = ["Tamil", "English", "hindi"];
language.push("Arabic");
console.log(language);
//  another method of adding array wihtout push method
const subjects = ["tamil", "english ", "maths"];
subjects[subjects.length] = "social science";
document.write(subjects);
// Adding elements with high indexes can create undefined "holes" in an array:

const fruits1 = ["Banana", "Orange", "Apple"];
fruits1[6] = "Lemon";

let fLeng = fruits1.length;
let text1 = "";
for (i = 0; i < fLeng; i++) {
  text1 += fruits1[i] + "<br>";
}
let fru = ["apple", "banana", "orange"];
let typefru = typeof fru;
document.write(typefru);
//  another  method to find Is array
document.write(Array.isArray(fru));
//  by returning the value of true/false
document.write(fru instanceof Array);
document.getElementById("demo1").innerHTML = text1;
//  Nested array and objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
