gsap.registerPlugin(ScrollTrigger);

const frameCount = 14; //총 개수에서 -1 (1번째는 0이라서)
const offsetValue = 100; // 백분율로 계산하기 위함

gsap.to('.stage', {
  backgroundPosition: -offsetValue * frameCount * 2.0 + 'px center',
  // offsetValue와 frameCount와 한컷의 너비인 2를 곱한 값을 x축 px y축은 center로

  ease: 'steps(' + frameCount + ')', //마우스 휠을 프레임 컷 수에 맞춰줌
  scrollTrigger: {
    trigger: '.character',
    start: 'top top',
    end: '+=' + frameCount * offsetValue, //frameCount와 offsetValue를 곱해서 시작점에 더한 값
    pin: true,
    scrub: 1,
  },
});
