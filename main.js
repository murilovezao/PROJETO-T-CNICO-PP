var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var imageObj = new Image();

imageObj.onload = function()
{
    context.drawImage(imageObj, 0, 0);
}  

imageObj.src = "arqteste.avif"; 

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e)
{
    var text = document.getElementById('myText').value;

    if(text.lenght == 0)
    {
         alert("you forgot to put something");
    }

    context.font = "40pt Calibri";
    context.fillText(text, 50, 50);
    
    e.preventDefault();
});