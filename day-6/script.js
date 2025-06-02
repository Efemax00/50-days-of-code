
document.getElementById('generateBtn').addEventListener('click', function() {
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const fileInput = document.getElementById('imageFile');
    const memeContainer = document.getElementById('memeContainer');

    // Clear previous meme
    memeContainer.innerHTML = '';

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                // Draw the image
                ctx.drawImage(img, 0, 0);

                // Add text
                ctx.font = '50px Impact';
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';

                // Top text
                ctx.fillText(topText, canvas.width / 2, 60);
                ctx.strokeText(topText, canvas.width / 2, 60);

                // Bottom text
                ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
                ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);

                // Add canvas to container
                memeContainer.appendChild(canvas);
            };
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});

// 💡 Add This Block for the Download Button AFTER the generateBtn code
document.getElementById('downloadBtn').addEventListener('click', function() {
    const memeContainer = document.getElementById('memeContainer');

    if (memeContainer.innerHTML === '') {
        alert('Please generate a meme first.');
        return;
    }

    html2canvas(memeContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my_meme.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
