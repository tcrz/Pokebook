import ColorThief from "colorthief";

export function getDominantColor(imageUrl, callback) {
    console.log("getting color")
    const img = document.createElement("IMG");
    const colorThief = new ColorThief();
    img.setAttribute("src", imageUrl);
    img.crossOrigin = "Anonymous";
    if (img.complete) {
      console.log("completed")
      callback(colorThief.getColor(img));
    } else {
      img.addEventListener("load", function () {
        callback(colorThief.getColor(img));
      });
    }
  }