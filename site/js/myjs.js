$(function () {
    var hello = ['UI Developer', 'Photographer', 'Hungry for creativity'];
    var used = ['UI Developer'];
    var greeting = $('#what');
    var item;
    var sentence = $('#sentence');

    function hey() {
        item = hello[Math.floor(Math.random() * hello.length)];
        if (hello.length != used.length) {
            while (jQuery.inArray(item, used) != -1) {
                item = hello[Math.floor(Math.random() * hello.length)];
            }
            used.push(item);
        } else {
            used.length = 0;
            item = hello[Math.floor(Math.random() * hello.length)];
            used.push(item);
        }
        greeting.html(item);
        greeting.animate({
            "opacity": "1"
        }, 1500);

        sentence.fadeIn(1500);
    }

    window.setInterval(function () {
        sentence.fadeOut(1500);
        greeting.animate({
            "opacity": "0"
        }, 1500);
        setTimeout(hey, 1500);
    }, 5000);

});


$(function gallery(){
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
		}
  });
});





function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}