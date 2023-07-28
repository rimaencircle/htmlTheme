

$(document).ready(function () {

    $(document).foundation();

  /*Sticky Header*/
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('.sticky-nav').addClass('is-sticky');
        $('.hh_header').addClass('is-sticky');
      } else {
        $('.sticky-nav').removeClass('is-sticky');
        $('.hh_header').removeClass('is-sticky');
      }
  });

  // preloading effect
  setTimeout(function () {
    $('.preloader').addClass('loaded');
    if ($('.preloader').hasClass('loaded')) {
        $('.preloader').delay(1000).queue(function() {
          $('.main').fadeIn();
        });
    }
  }, 3000);
  
  // change themes
  const switchTheme = function() {
      const rootElem = $("html[data-color-scheme]");
      let dataTheme = rootElem.attr("data-color-scheme");
      let newTheme = dataTheme === "light" ? "dark" : "light";
      rootElem.attr("data-color-scheme", newTheme);
      localStorage.setItem("color-scheme", newTheme);
  };

  // Use jQuery to select the toggle buttons and add the event listener
  $(".theme-switche").on("click", switchTheme);

  $('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });
  $('p span').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });

  // js for onscroll animation
  gsap.registerPlugin(ScrollTrigger);

  const zoomAnim = gsap.utils.toArray('.zoomAnim');
  zoomAnim.forEach((box, i) => {
      const zoomanim = gsap.to(box.children,0.5, {duration: 0.6, scale: 1.001});
      ScrollTrigger.create({
          trigger: box,
          ease: 'power2.in',
          animation: zoomanim,
          once: false,
      });
  });
  const imageAnim = gsap.utils.toArray('.imageAnim');
  imageAnim.forEach((box, i) => {
      const imageanim = gsap.to(box.children, {
          left: '0',
          transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',
      });
      ScrollTrigger.create({
          trigger: box,
          ease: 'power2.in',
          animation: imageanim,
          once: false,
      });
  });
  const textAnim = gsap.utils.toArray('.textAnim');
  textAnim.forEach((box, i) => {
      const textanim = gsap.fromTo(box.children, { y: '100%', opacity: 0 ,autoAlpha:0, transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',}, { duration: 0.8, y: 0, opacity: 1 ,stagger: 1,autoAlpha:1});
      ScrollTrigger.create({
          trigger: box,
          animation: textanim,
          once: false,
      });
  });

  const labelAnim = gsap.utils.toArray('.labelAnim');
  labelAnim.forEach((box, i) => {
    const labelAnim = gsap.to(box, {
          duration: 0.8,
          y: '0%',
          transition: 'all 1s cubic-bezier(0.23, 0.93, 0.23, 0.93)',
      });
      ScrollTrigger.create({
          trigger: box,
          animation: labelAnim,
          once: false,
      });
  });

    $('.n-burgur-btn').click(function(){
        $('.n-mobile-menu').toggleClass('open');
        $('html').toggleClass('overflow-hidden');
    });
    $('.n-close-btn').click(function(){
        $('.n-mobile-menu').removeClass('open');
        $('html').toggleClass('overflow-hidden');
    });
    $('.n-search-icon').click(function(){
      $('.n-search-popup').toggleClass('show');
      $('html').toggleClass('overflow-hidden');
    });
    $('.n-search-close-icon').click(function(){
      $('.n-search-popup').toggleClass('show');
      $('html').toggleClass('overflow-hidden');
    });
  
  
  // swiper section

  var heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    direction: getDirection(),
    loop:true,
    spaceBetween: 30,
    speed:5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    on: {
      resize: function () {
        heroSwiper.changeDirection(getDirection());
      },
    },
  });
  var heroSwiperReverse = new Swiper(".heroSwiperReverse", {
    slidesPerView: 2,
    centeredSlides: true,
    direction: getDirection(),
    loop:true,
    spaceBetween: 30,
    speed:5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true, 
    },
    on: {
      resize: function () {
        heroSwiperReverse.changeDirection(getDirection());
      },
    },
  });
  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 992 ? 'horizontal' : 'vertical';

    return direction;
  }
  
  var trioSwiper = new Swiper(".trioSwiper", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    speed:5000,
    // autoplay: {
    //   delay: 1,
    //   disableOnInteraction: false,
    // },
  });
 
});


    


