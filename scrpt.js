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

// DOM에서 클래스 이름이 "container"인 요소를 찾아 변수에 할당.
const container = document.querySelector('.container');

// 문서의 body 요소에 "mousemove" 이벤트가 발생할 때마다 실행되는 콜백 함수
document.body.addEventListener('mousemove', (e) => {
  const y = e.clientY - container.offsetTop;
  // gsap 라이브러리의 to() 메서드를 사용해 container 요소의 y축 위치를 변경합니다.
  gsap.to(container, { y: y - 50 }); //현재 y 마우스 좌표값

  // gsap 라이브러리의 to() 메서드를 사용해 "mask" 클래스를 가진 요소의 y축 위치를 변경합니다.
  // 여기서 변수y값만큼 빼 위치로 변경
  gsap.to('.mask', { y: -y + 50 }); //y의 음수값
});
