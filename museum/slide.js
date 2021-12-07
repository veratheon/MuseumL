const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot'),
prev1 = document.getElementById('btn-prev-video'),
next1 = document.getElementById('btn-next-video'),
slides1 = document.querySelectorAll('.video-slide'),
dots1 = document.querySelectorAll('.dot-video');




let index = 0; // текущий активный слайд

const activeSlide1 = (n) => {

      for (slide of slides1) {
          slide.classList.remove('active');
        }
slides1[n].classList.add('active');
slides1[(n+1)].classList.add('active');
slides1[(n+2)].classList.add('active');

};


const activeDot1 = (n) => {
for (dot of dots1) {
  dot.classList.remove('active');
}
dots1[n].classList.add('active');
};

const prepareCurrentSlide1 = (ind) => {
  activeDot1(ind);
  activeSlide1(ind);
};

const nextSlide1 = () => {
if (index === 4) {
  index = 0;
  prepareCurrentSlide1(index);
} else {
  index++;
  prepareCurrentSlide1(index);
}
};

const prevSlide1 = () => {
if (index === 0) {
  index = 4;
  prepareCurrentSlide1(index);
} else {
  index--;
  prepareCurrentSlide1(index);
}
};

dots1.forEach((item, indexDot) => {
item.addEventListener('click', () => {
  index = indexDot;
  prepareCurrentSlide1(index);
});
});

next1.addEventListener('click', nextSlide1);
prev1.addEventListener('click', prevSlide1);



const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};
const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};
const prepareCurrentSlide = (ind) => {
    activeDot(ind);
    activeSlide(ind);
  
};
const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

