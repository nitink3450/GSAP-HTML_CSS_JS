// gsap.from('.header', { duration: 1, y: "-100%", ease: "bounce" })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" })
// gsap.from('.left', { duration: 1, x: "-100%", delay: 2 })
// gsap.to('.footer', { duration: 1, delay: 2.5, y: 0 })
// gsap.fromTo('.button', { rotate: 720, scale: 0, opacity: 0 }, { duaration:1,delay:3.5,rotate: 0, scale: 1, opacity: 1 })

let timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
    .from('.header', { y: "-100%", ease: "bounce" })
    .from('.link', { opacity: 0, stagger: .5 })
    .from('.right', { x: "-100vw", ease: "power2.in" }, 1)//absolute delay 1-as soon as timeline start
    .from('.left', { x: "-100%", },"<0.5")//relative delay 0.5-after prevoius element finishes there work,<prevous,>next
    .to('.footer', { y: 0, ease: "elastic" })
    .fromTo('.button', { rotate: 720, scale: 0, opacity: 0 }, { rotate: 0, scale: 1, opacity: 1 })

const btn = document.querySelector(".button");
btn.addEventListener('click',()=>{
    timeline.timeScale(3);//3 times faster than normal
    timeline.reverse();
})
