document.addEventListener("DOMContentLoaded", function() {
    // Set the first image as active by default
    var firstImage = document.querySelector(".column img");
    if (firstImage) {
      firstImage.click();
    }
  });
  
  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    var inputText = document.getElementById("textInput").value;
    var pos = imgs.getAttribute('data-pos');
  
    // Reset imgtext position
    imgText.style.bottom = '';
    imgText.style.left = '';
    imgText.style.top = '';
    imgText.style.right = '';
  
    // Set imgtext position based on data-pos attribute
    switch(pos) {
      case 'bottom-left':
        imgText.style.bottom = '15px';
        imgText.style.left = '15px';
        break;
      case 'top-right':
        imgText.style.top = '15px';
        imgText.style.right = '15px';
        break;
      case 'top-left':
        imgText.style.top = '15px';
        imgText.style.left = '15px';
        break;
      case 'bottom-right':
        imgText.style.bottom = '15px';
        imgText.style.right = '15px';
        break;
    }
  
    expandImg.src = imgs.src;
    expandImg.setAttribute('data-pos', pos);  // Store pos in expandedImg
    imgText.innerHTML = inputText;
    imgText.style.display = inputText ? 'block' : 'none'; // Only display text if input is not empty
    expandImg.parentElement.style.display = "block";
  }
  
  function downloadImage() {
    var expandImg = document.getElementById("expandedImg");
    var inputText = document.getElementById("textInput").value;
    var pos = expandImg.getAttribute('data-pos');
  
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    var image = new Image();
    image.src = expandImg.src;
  
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw image on canvas
      ctx.drawImage(image, 0, 0);
  
      // Add text
      if (inputText) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        switch(pos) {
          case 'bottom-left':
            ctx.fillText(inputText, 15, image.height - 15);
            break;
          case 'top-right':
            ctx.fillText(inputText, image.width - ctx.measureText(inputText).width - 15, 30);
            break;
          case 'top-left':
            ctx.fillText(inputText, 15, 30);
            break;
          case 'bottom-right':
            ctx.fillText(inputText, image.width - ctx.measureText(inputText).width - 15, image.height - 15);
            break;
        }
      }
  
      // Create a link and set the download attribute to the canvas data URL
      var link = document.createElement('a');
      link.href = canvas.toDataURL("image/png");
      link.download = 'image_with_text.png';
      link.click();
    }
  }
document.addEventListener("DOMContentLoaded", function() {
  // Set the first image as active by default
  var firstImage = document.querySelector(".col-3 img");
  if (firstImage) {
    firstImage.click();
  }
});

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  var inputText = document.getElementById("textInput").value;
  var pos = imgs.getAttribute('data-pos');

  // Reset imgtext position
  imgText.style.bottom = '';
  imgText.style.left = '';
  imgText.style.top = '';
  imgText.style.right = '';

  // Set imgtext position based on data-pos attribute
  switch(pos) {
    case 'bottom-left':
      imgText.style.bottom = '15px';
      imgText.style.left = '15px';
      break;
    case 'top-right':
      imgText.style.top = '15px';
      imgText.style.right = '15px';
      break;
    case 'top-left':
      imgText.style.top = '15px';
      imgText.style.left = '15px';
      break;
    case 'bottom-right':
      imgText.style.bottom = '15px';
      imgText.style.right = '15px';
      break;
  }

  expandImg.src = imgs.src;
  expandImg.setAttribute('data-pos', pos);  // Store pos in expandedImg
  imgText.innerHTML = inputText;
  imgText.style.display = inputText ? 'block' : 'none'; // Only display text if input is not empty
  expandImg.parentElement.style.display = "block";
}

function downloadImage() {
  var expandImg = document.getElementById("expandedImg");
  var inputText = document.getElementById("textInput").value;
  var pos = expandImg.getAttribute('data-pos');

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  
  var image = new Image();
  image.src = expandImg.src;

  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw image on canvas
    ctx.drawImage(image, 0, 0);

    // Add text
    if (inputText) {
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      switch(pos) {
        case 'bottom-left':
          ctx.fillText(inputText, 15, image.height - 15);
          break;
        case 'top-right':
          ctx.fillText(inputText, image.width - ctx.measureText(inputText).width - 15, 30);
          break;
        case 'top-left':
          ctx.fillText(inputText, 15, 30);
          break;
        case 'bottom-right':
          ctx.fillText(inputText, image.width - ctx.measureText(inputText).width - 15, image.height - 15);
          break;
      }
    }

    // Create a link and set the download attribute to the canvas data URL
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = 'image_with_text.png';
    link.click();
  }
}  