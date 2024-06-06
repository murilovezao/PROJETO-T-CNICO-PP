function toggleComment() {
    var commentContainer = document.getElementById("comment-container");
    if (commentContainer.style.display === "block") {
        commentContainer.style.display = "none";
    } else {
        commentContainer.style.display = "block";
    }
}

function submitComment() {
    var commentInput = document.getElementById("comment-input");
    var comment = commentInput.value;
    // Aqui você pode fazer o que quiser com o comentário, como enviá-lo para um servidor, etc.
    console.log("Comentário enviado:", comment);
    // Resetar o campo de comentário e ocultar a caixa de texto
    commentInput.value = "";
    document.getElementById("comment-container").style.display = "none";
}

function hideComment() {
    document.getElementById("comment-container").style.display = "none";
}


let canvasActivated = false;

function toggleCanvas() {
    if (canvasActivated) {
        sendCanvasBack();
        canvasActivated = false;
    } else {
        bringCanvasForward();
        canvasActivated = true;
    }
}


function bringCanvasForward() {
    canvas.style.zIndex = "1";
    canvas.style.pointerEvents = "auto"; // Permite interação com o canvas
}

function sendCanvasBack() {
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none"; // Impede interação com o canvas
}


// parte da caneta a seguir

let isDrawing = false;
let lastX = 0;
let lastY = 0;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Definir o tamanho do canvas como o tamanho da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function activateDrawingTool(e) {
    isDrawing = true;
    document.body.style.cursor = "crosshair";
    [lastX, lastY] = [e.clientX, e.clientY]; // Salvar a posição inicial do mouse
}

function deactivateDrawingTool() {
    isDrawing = false;
    document.body.style.cursor = "auto";
}

function draw(e) {
    if (!isDrawing) return;

    const newX = e.clientX;
    const newY = e.clientY;
    
    // Desenhar uma linha do ponto anterior para o ponto atual
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    
    // Atualizar a posição do último ponto
    lastX = newX;
    lastY = newY;
}

document.addEventListener('mousedown', activateDrawingTool);
document.addEventListener('mouseup', deactivateDrawingTool);
document.addEventListener('mousemove', draw);

// Atualizar o tamanho do canvas quando a janela for redimensionada
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});