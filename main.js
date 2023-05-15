// Declaring variables
let item1 = document.getElementById('first-computer-program');
let image1 = document.getElementById("image1");
let item2 = document.getElementById('analytical-engine');
let image2 = document.getElementById('image2');
let item3 = document.getElementById('ada-programming-language');
let image3 = document.getElementById('image3');


// Functions to open and close the projects' images

let openCloseImage1 = function () {
    if (image1.style.display == "none") {
        image1.style.display = "block";
    } else {
        image1.style.display = "none"
    }
};


let openCloseImage2 = function () {
    if (image2.style.display == "none") {
        image2.style.display = "block";
    } else {
        image2.style.display = "none"
    }
};


let openCloseImage3 = function () {
    if (image3.style.display == "none") {
        image3.style.display = "block";
    } else {
        image3.style.display = "none"
    }
};

item1.onclick = openCloseImage1;
item2.onclick = openCloseImage2;
item3.onclick = openCloseImage3;


// Time calculation

const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "12-10-1815";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);