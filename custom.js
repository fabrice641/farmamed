// spanタグに分割
let splitTarget = document.querySelectorAll('.js-splitText');//ターゲットとなる要素を全取得
splitTarget.forEach((target) =>{
  //target = ターゲット
  
    newText = '';//生成する要素を格納するための変数
    spanText = target.innerHTML;//ターゲットの中身を取得
    spanText.split('').forEach((char) =>{
      //char = character 文字
      newText += '<span>' + char + '</span>';//一文字ずつspanタグで囲む
    });
    target.innerHTML = newText;//ターゲットに生成した要素を挿入
});


let targets = document.querySelectorAll('.js-text-effect');


targets.forEach((target)=>{
  let spans = target.querySelectorAll('span');
  gsap.to(spans,{rotateY:'0',duration:.5,stagger:.05,autoAlpha:1,scrollTrigger:{
    trigger:spans,
    start:'top bottom',
  }})
})







let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let list = [].slice.call(document.querySelector('.container').children)

function findActiveList() {
  let activeList = list.findIndex((e) => {
    return e.classList.contains('active')
  })
  
  list[activeList].classList.remove('active', 'fadeInRight', 'fadeInLext', 'animated')
  
  return activeList
}

function slideShow() {
  let activeList = findActiveList()
  
  activeList++
  activeList = activeList === list.length ? 0 : activeList
  
  list[activeList].classList.add('active', 'fadeInRight', 'animated')
}

setInterval(slideShow, 5000)

nextButton.addEventListener('click', slideShow)

prevButton.addEventListener('click', () => {
  let activeList = findActiveList()
  
  activeList--
  activeList = activeList === -1 ? list.length - 1 : activeList
  
  list[activeList].classList.add('active', 'fadeInLeft', 'animated')
})



        $(document).ready(function(){
            $(".on").click(function() {
                $('.alert').css({
                    'transform': 'translateX(0)',
                });
            });
            
            $(".close").click(function() {
                $('.alert').css({
                    'transform': 'translateX(150%)',
                });
            });

            $(".out").click(function(){
                $('.alert').css({
                    'transform': 'translateX(150%)',
                });
            })
        })
   ScrollReveal({ reset: true });
        ScrollReveal().reveal('.banner', { easing:"ease-in", delay: 100});
        ScrollReveal().reveal('.shop', { easing: "ease-in", delay: 100});
        ScrollReveal().reveal('.about', { easing: "ease-in", delay: 100 });
        ScrollReveal().reveal('.review', { easing: "ease-in", delay: 100 });
        ScrollReveal().reveal('.contact', { easing: "ease-in", delay: 100 });
        ScrollReveal().reveal('.form', { easing: "ease-in", delay: 100 });
        ScrollReveal().reveal('.strip', { easing: "ease-in", delay: 100 });


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
