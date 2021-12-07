const pictureInnerContaines = document.querySelector('.picture-inner-container');
let addressOffPictures = [
    'assets/img/galery1.jpg',
    'assets/img/galery2.jpg',
    'assets/img/galery3.jpg',
    'assets/img/galery4.jpg',
    'assets/img/galery5.jpg',
    'assets/img/galery6.jpg',
    'assets/img/galery7.jpg',
    'assets/img/galery8.jpg',
    'assets/img/galery9.jpg',
    'assets/img/galery10.jpg',
    'assets/img/galery11.jpg',
    'assets/img/galery12.jpg',
    'assets/img/galery13.jpg',
    'assets/img/galery14.jpg',
    'assets/img/galery15.jpg'
]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

const rand = () => {
    shuffle(addressOffPictures);
    for (let i of addressOffPictures){
        let img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = i;
        img.alt = `galery1`;
        pictureInnerContaines.append(img);
    }
}

document.addEventListener("DOMContentLoaded", rand);
