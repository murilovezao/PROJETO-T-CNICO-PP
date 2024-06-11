document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageData = e.target.result;
        document.getElementById('image-container').innerHTML = '<img src="' + imageData + '" alt="Imagem" class="image">';
        
        // Adiciona um evento de clique à imagem carregada para redirecionar para testepg.html com a imagem como parâmetro
        document.querySelector('.image').addEventListener('click', function() {
            window.location.href = 'testepg.html?image=' + encodeURIComponent(imageData);
        });
    }

    reader.readAsDataURL(file);
});
