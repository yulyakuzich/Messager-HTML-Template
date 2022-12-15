//viewer
var viewer = document.getElementById("image-viewer");
var viewerImg = document.getElementById("image-viewer-img");

function openImage(event) {
  var url = event.target.attributes.src.value;
  viewerImg.setAttribute("src", url);
  viewer.classList.add("image-viewer-active");
}

function closeImage() {
  viewer.classList.remove("image-viewer-active");
}

const images = document.getElementsByClassName("message-img");

for (image of images) {
  image.addEventListener("click", openImage);
}

viewer.addEventListener("click", closeImage);

//switcher
function imageSwitcher(event) {
  let currentImageURL = viewerImg.getAttribute("src");

  if (currentImageURL) {
    let urlArray = Array.prototype.slice
      .call(images)
      .map((imageElement) => imageElement.attributes.src.value);

    let currentImageIndex = urlArray.findIndex((el) => el == currentImageURL);

    function goRight() {
      if (currentImageIndex + 1 == urlArray.length) {
        viewerImg.setAttribute("src", urlArray[0]);
      } else {
        viewerImg.setAttribute("src", urlArray[currentImageIndex + 1]);
      }
    }

    function goLeft() {
      if (currentImageIndex == 0) {
        viewerImg.setAttribute("src", urlArray[urlArray.length - 1]);
      } else {
        viewerImg.setAttribute("src", urlArray[currentImageIndex - 1]);
      }
    }
    if (event.code == "ArrowRight") {
      goRight();
    }
    if (event.code == "ArrowLeft") {
      goLeft();
    }
    if (event.code == "Escape") {
      closeImage();
    }
  }
}
document.addEventListener("keydown", imageSwitcher);

//close channel
let closeChannelButtons = document.getElementsByClassName("close-button");
console.log(closeChannelButtons);

for (element of closeChannelButtons) {
  element.addEventListener("click", Alarm);
}

function Alarm(e) {
  if (window.confirm("Do you really want to leave?")) {
    console.log(e.target.parentElement);
    e.target.parentNode.remove();
  }
}
