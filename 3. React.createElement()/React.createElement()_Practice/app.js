var DomH1 = document.createElement("h1");
DomH1.className = "first-react";
DomH1.innerText = "create element";

document.body.appendChild(DomH1);


// react

var reactH1 = React.createElement("h1",
{
    className: "first-react",
    id:"test"
},"alo")

console.log(reactH1);

var reactDiv = React.createElement("div",
{
    className: "first-react",
},reactH1,reactH1)

console.log(reactDiv);

//bài tập

var  reactH2 = React.createElement("h2",{
    title:"Học React tại F8"
},"Học ReactJs")
var  reactp = React.createElement("p",null,"Học ReactJs từ cơ bản đến nâng cao")

var baitap = React.createElement("div",{
    className: "post-item"
},reactH2,reactp);

console.log(baitap);