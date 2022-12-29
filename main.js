addEventListener("DOMContentLoaded", (e)=>{
    let redBtn=document.getElementById("red");
    let blueBtn=document.getElementById("blue");
    let blackBtn=document.getElementById("black");
    let bike=document.getElementById("bike");

    redBtn.onclick=function(){
        bike.style.backgroundImage="url(imagenes/BMW1.png)";
    }
    blueBtn.onclick=function(){
        bike.style.backgroundImage="url(imagenes/BMW2.png)";
    }
    blackBtn.onclick=function(){
        bike.style.backgroundImage="url(imagenes/BMW3.png)";
    }

})