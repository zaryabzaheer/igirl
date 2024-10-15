const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-banner ",
      start: "top",
      end: "bottom bottom",
      scrub: true,
      // end: "+=4885",
    }
  });
  tl.to("#scrolling_girl", 4,{yPercent: 0, 'width':'400px','top':'-30px', ease: "slow(0.7, 0.7, false)"})
  tl.to(".banner-img ", 4,{ 'background-size':'125%',ease: "slow(0.7, 0.7, false)"},"-=4")
  tl.to(".planet5", 4,{ 'width':'400px', 'top':'-30%','right':'-3%'},"-=4")
  tl.to(".planet6", 4,{ 'width':'100px','top':'-6%'},"-=4")
  tl.to(".planet7", 4,{ 'width':'120px'},"-=4")
  tl.to(".planet4", 4,{ 'width':'100px'},"-=4")
  tl.to(".planet3", 4,{ 'width':'170px','right':'10px'},"-=4")
  tl.to("#scrolling_girl", {yPercent: 0, 'width':'200px','left':'200px','top':'-30px',duration: 4, ease: "slow(0.7, 0.7, false)"})
  tl.to(".planet5", 4,{ 'width':'400px', 'top':'-50%','right':'-10%'},"-=4")
  tl.to(".planet6", 4,{ 'width':'480px','top':'-30%','right':'-10%'},"-=4")
  tl.to(".planet7", 4,{ 'width':'200px',autoAlpha: 0.5},"-=4")
  tl.to(".planet3", 4,{ 'width':'300px'},"-=4")
  tl.to(".planet1", 4,{ 'width':'100px'},"-=4")
  tl.to(".banner-img ", 4,{ 'background-size':'145%',ease: "slow(0.7, 0.7, false)"},"-=4")
  tl.to("#scrolling_girl",  {xPercent: 0,'left':'-50px','width':'200px',duration: 2, ease: "slow(0.7, 0.7, false)"})
  tl.to(".planet7", 4,{ 'width':'200px',autoAlpha: 0},"-=4")
  tl.to(".planet3", 4,{ 'width':'380px','top':'-5%','right':'-3%'},"-=4")
  tl.to(".planet2", 4,{ 'width':'200px','top':'-100px'},"-=4")
  tl.set("#scrolling_girl",{attr:{src:'images/curve-women.svg'} ,'width':'600',autoAlpha: 0.5}),"-=2";
  tl.to("#scrolling_girl", {xPercent: 0, 'left':'-400px',duration: 2.5, ease: "slow(0.7, 0.7, false)",autoAlpha: 1})
  tl.to(".planet3", 4,{ 'width':'180px','top':'5%','right':'-3%'},"-=4")
  tl.to(".planet2", 4,{ 'width':'200px',autoAlpha: 0},"-=4")
  tl.to(".planet4", 4,{ 'width':'150px','top':'70px','right':'40px'},"-=4")
  tl.to(".planet1", 4,{ 'width':'230px','top':'-18%','right':'8%'},"-=4")
  tl.to(".planet6", 4,{ autoAlpha: 0},"-=4")
  tl.to(".banner-img ", 4.5,{ 'background-position':'center 30%',ease: "slow(0.7, 0.7, false)"},"-=4.5")
  tl.to("#scrolling_girl", {xPercent: 0, 'left':'400px','transform':'rotate(90deg)',duration: 2.5, ease: "slow(0.7, 0.7, false)"})
  tl.to(".banner-img ", 2.5,{ 'background-position':'center 50%','background-size':'190%',ease: "slow(0.7, 0.7, false)"},"-=2.5")
$(document).ready(function(){
  $('.road-map-carousal').slick({
   dots: true,
   infinite: false,
   arrows:false,
   speed: 300,
   centerMode: true,
   infinite: true,
   focusOnSelect: true,
   cssEase: 'linear',
   touchMove: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });
 });
 	// Initialize AOS 
 AOS.init();
//  lottie Animation

// const playerContainers = document.querySelectorAll(".hoverEffects");
// playerContainers.forEach(container => {
//   container.addEventListener("mouseover", () => {
//     const player = container.querySelector("lottie-player");
//     player.setDirection(1);
//     player.play();
//   });

//   container.addEventListener("mouseleave", () => {
//     const player = container.querySelector("lottie-player");
//     player.setDirection(-1);
//     player.play();
//   });
// });








  




