const fruit=["mango","apple","banana","papaya","orange"]
let flen= fruit.length;
//   let text="<ul> "
let text =" "
for( let i=0; i< flen; i++){
// text += " <li>"+fruit[i]+"</li>";
text += fruit[i]

}
// text +="</ul>";
text+=" ";
document.getElementById("demo").innerHTML= text;
//  the codes that i have commended are to make the element order