const prev = document.getElementById('btn-prev-video'),
  next = document.getElementById('btn-next-video'),
  slides = document.querySelectorAll('.video-slide'),
  dots = document.querySelectorAll('.dot-video');

let index = 0; // текущий активный слайд

const activeSlide = (n) => {

        for (slide of slides) {
            slide.classList.remove('active');
          }
  slides[n].classList.add('active');
  slides[(n+1)].classList.add('active');
  slides[(n+2)].classList.add('active');

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

