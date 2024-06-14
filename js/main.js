function myFunction(imgs, imgtextId, downloadFilename) {
    var expandImg = document.getElementById("expandedImg");
    var inputText = document.getElementById("inputText").value;

    // Hide all text elements
    var imgTexts = document.getElementsByClassName("imgtext");
    for (var i = 0; i < imgTexts.length; i++) {
        imgTexts[i].style.display = "none";
    }

    // Display the relevant text element and set its content
    var imgText = document.getElementById(imgtextId);
    imgText.innerHTML = inputText;
    imgText.style.display = "block";

    // Show the download button next to the input field
    var downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.dataset.imgtextId = imgtextId; // Store the imgtextId for later use
    downloadBtn.href = "#"; // Reset the href
    downloadBtn.download = downloadFilename;
    downloadBtn.style.display = "block";

    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";

    // Remove active class from all images
    var allImgs = document.querySelectorAll('.column img');
    allImgs.forEach(function (img) {
        img.classList.remove('active-tab');
    });

    // Add active class to the clicked image
    imgs.classList.add('active-tab');
}

function updateText() {
    var inputText = document.getElementById("inputText").value;
    var imgText = document.querySelector('.imgtext:not([style*="display: none"])');

    if (imgText) {
        imgText.innerHTML = inputText;
    }

    // Show the download button if there's input text
    var downloadBtn = document.getElementById("downloadBtn");
    if (inputText.trim()) {
        downloadBtn.style.display = "block";
    } else {
        downloadBtn.style.display = "none";
    }
}

// Automatically activate the first image on page load
window.onload = function () {
    var firstImg = document.querySelector('.column img');
    if (firstImg) {
        myFunction(firstImg, 'imgtext1', 'Nature.jpg');
    }
}

// Add event listener to update text dynamically
document.getElementById('inputText').addEventListener('input', updateText);

// Capture the expanded image with text and download it
document.getElementById('downloadBtn').addEventListener('click', function (e) {
    e.preventDefault();
    var captureArea = document.getElementById("captureArea");
    var imgtextId = this.dataset.imgtextId;
    var imgText = document.getElementById(imgtextId);
    var inputText = document.getElementById("inputText").value;

    // Ensure text is updated before capture
    imgText.innerHTML = inputText;

    // Use html2canvas to capture the image with the text
    html2canvas(captureArea).then(function (canvas) {
        // Create a link element to download the image
        var link = document.createElement('a');
        link.download = 'card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
