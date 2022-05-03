'use strict'

const picContainerElement = document.getElementById ('pics');

const firstPicElement = document.getElementById ('pic1');

const secondPicElement = document.getElementById ('pic2');

const thirdPicElement = document.getElementById ('pic3');

const firstPicTitle =document.getElementById ('imgtitle1');

const secondPicTitle =document.getElementById ('imgtitle2');

const thirdPicTitle =document.getElementById ('imgtitle3');


let count = 0

let pic1 = null;
let pic2 = null;
let pic3 = null;


function Images(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = [];

Image.prototype.renderImage = function(img, h2){
    img.src = this.imgPath;
    h2.textContent = this.name;
    this.views ++;
}


Image.allImages.push(new Image('bag','./images/bag.jpg'));
Image.allImages.push(new Image('banana','./images/banana.jpg'));
Image.allImages.push(new Image('bathroom','./images/bathroom.jpg'));
Image.allImages.push(new Image('boots','./images/boots.jpg'));
Image.allImages.push(new Image('breakfast','./images/breakfast.jpg'));
Image.allImages.push(new Image('bubblegum','./images/bubblegum.jpg'));
Image.allImages.push(new Image('chair','./images/chair.jpg'));
Image.allImages.push(new Image('cthulhu','./images/cthulu.jpg'));
Image.allImages.push(new Image('dog-duck','./images/dog-duck.jpg'));
Image.allImages.push(new Image('dragon','./images/dragon.jpg'));
Image.allImages.push(new Image('pen','./images/pen.jpg'));
Image.allImages.push(new Image('pet-sweep','./images/pet-sweep.jpg'));
Image.allImages.push(new Image('scissors','./images/scissors.jpg'));
Image.allImages.push(new Image('shark','./images/shark.jpg'));
Image.allImages.push(new Image('sweep','./images/sweep.jpg'));
Image.allImages.push(new Image('tauntaun','./images/tauntaun.jpg'));
Image.allImages.push(new Image('unicorn','./images/unicorn.jpg'));
Image.allImages.push(new Image('water-can','./images/water-can.jpg'));
Image.allImages.push(new Image('wine-glass','./images/wine-glass.jpg'));

function getThreeImages(){
    const cantUse = [pic1, pic2, pic3];
     if(cantUse.includes(pic1)){
         let picOne = Math.floor(Math.random() * Image.allImages.length);
         pic1 = Image.allImages[picOne];
     }
      cantUse.push[pic1]
      if(cantUse.includes(pic2)){
          let picTwo = Math.floor(Math.random() * Image.allImages.length);
          pic2 = Image.allImages[picTwo];
      }
       cantUse.push[pic2];
       if(cantUse.includes(pic3)){
           let picThree = Math.floor(Math.random() * Image.allImages.length);
           pic3 = Image.allImages[picThree];
       }
        cantUse.push[pic3];
}

function renderImage(){
    pic1.renderImage(firstPicElement, firstPicTitle);
    pic2.renderImage(secondPicElement, secondPicTitle);
    pic3.renderImage(thirdPicElement, thirdPicTitle);
  }
  

function storgeImages(){
    let stringArray = JSON.stringify(Image.allImages);
    if (stringArray = []){
        localStorage.setItem('image',stringArray);
    }
      else(localStorage.setItem('image',stringArray));
}

function getStorgeImages(){
    let storedImage = localStorage.getItem('image');
    if(storgeImages){
        let newImage = JSON.parse(storgeImages);
        for(let image of newImage){
            let myNewImage = new Image(image.name, image.imgpath, image.clicks ,image.views);
        }
    }
}


    getThreeImages();
    renderImage();