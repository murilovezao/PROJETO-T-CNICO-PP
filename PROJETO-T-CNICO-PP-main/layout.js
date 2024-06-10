document.getElementById('file-upload').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')){ continue }

        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;
            document.getElementById('image-container').appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}
