let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=GetRandomColor();
    h3.innerText=randomColor;
    console.log("Generate random Color");


    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    console.log("color Updated");


});

function GetRandomColor(){
    let Red=Math.floor(Math.random() * 255);
    let Green=Math.floor(Math.random() * 255);
    let Yellow=Math.floor(Math.random() * 255);

    let Color=`rgb(${Red},${Green},${Yellow})`;
    return Color;
}