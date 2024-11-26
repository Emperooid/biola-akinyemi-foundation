window.addEventListener('scroll', function() {
    var heading = document.querySelector('.heading');
    if (window.scrollY > 50) {
        heading.classList.add('scrolled');
    } else {
        heading.classList.remove('scrolled');
    }
});


const companyVideo = document.getElementById('company-video');
const video = document.getElementById('autoplay-video');

const observer = new IntersectionObserver((entries) => {
    if (entries [0]. isIntersecting){
        video.play();
    }
},{ threshold: 1.0});
observer.observe(companyVideo);



 document.getElementById('company-video');
 video.addEventListener("ended", function(){
    video.currentTime = 0;
    video.play();
 });
