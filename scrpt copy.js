gsap.registerPlugin(ScrollTrigger);

const frameCount = 14, // 총갯수에서 -1을 빼면 됨
  offsetValue = 100; // 백분율로 계산

gsap.to('.stage', {
  // 2.0 -> maxwidth : 200px 한 컷의 넓이
  backgroundPosition: -offsetValue * frameCount * 2.0 + 'px center',
  // backgroundPosition의 x축은 offsetValue와  frameCount와 2.0(한컷의 너비) 곱한 값을  뺀값(단위 px)
  //연산순위 ()가 먼저 연산되고 * / %이며, + - 순임

  ease: 'steps(' + frameCount + ')', // 마우스 휠을 프레임 컷수에 맞춰준다
  scrollTrigger: {
    trigger: '.character',
    start: 'top top',
    end: '+=' + frameCount * offsetValue, //frameCount 와 offsetValue를 곱해서 시작점에 더한값
    pin: true,
    scrub: true,
  },
});
