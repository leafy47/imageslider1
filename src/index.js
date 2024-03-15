const display = document.querySelector("#display");

// images
const image1 = document.getElementById("1");
const image2 = document.createElement("img");
const image3 = document.createElement("img");
const image4 = document.createElement("img");
const image5 = document.createElement("img");

image2.src = "../images/2.jpg";
image3.src = "../images/3.jpg";
image4.src = "../images/4.jpg";
image5.src = "../images/5.jpg";
image2.id = "2";
image3.id = "3";
image4.id = "4";
image5.id = "5";

const circle1 = document.getElementById("1c");
const circle2 = document.getElementById("2c");
const circle3 = document.getElementById("3c");
const circle4 = document.getElementById("4c");
const circle5 = document.getElementById("5c");


const circles = [circle1, circle2, circle3, circle4, circle5];
const images = [image1, image2, image3, image4, image5];

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    display.innerHTML = "";
    display.appendChild(images[index]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circle.src = "../images/filled.png";
  });
});

const next = document.querySelector(".next");
const before = document.querySelector(".before");

next.addEventListener("click", () => {
  const index = parseInt(display.firstElementChild.id, 10);
  display.innerHTML = "";
  if (images[index]) {
    display.appendChild(images[index]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[index].src = "../images/filled.png";
  } else {
    display.appendChild(images[0]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[0].src = "../images/filled.png";
  }
});

before.addEventListener("click", () => {
  const index = parseInt(display.firstElementChild.id, 10) - 2;
  display.innerHTML = "";
  if (images[index]) {
    display.appendChild(images[index]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[index].src = "../images/filled.png";
  } else {
    display.appendChild(images[4]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[4].src = "../images/filled.png";
  }
});

let timeoutId;

// Function to handle the timeout logic
function handleTimeout() {
  const index = parseInt(display.firstElementChild.id, 10);
  display.innerHTML = "";
  if (images[index]) {
    display.appendChild(images[index]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[index].src = "../images/filled.png";
  } else {
    display.appendChild(images[0]);
    const existingFilledImage = document.querySelector(
      'img[src="../images/filled.png"]',
    );
    if (existingFilledImage) {
      existingFilledImage.src = "../images/empty.png"; // Replace with the appropriate original image
    }
    circles[0].src = "../images/filled.png";
  }
}

// Set an initial timeout when the page loads
timeoutId = setTimeout(handleTimeout, 5000);

// Create a MutationObserver instance
const observer = new MutationObserver((mutations, observer) => {
  // Your custom logic here
  console.log("DOM changes detected:", mutations);

  // Clear the existing timeout (if any)
  clearTimeout(timeoutId);

  // Set a new timeout (e.g., 5 seconds)
  timeoutId = setTimeout(handleTimeout, 5000);
});

// Observe the document
observer.observe(document, { subtree: true, attributes: true });
