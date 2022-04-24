const images = [
    "bg01.jpg",
    "bg02.jpg",
    "bg03.jpg",
    "bg04.jpg"
]

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `image/${chosenImages}`;

document.body.prepend(bgImage);
