const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = document.querySelector(".slider__img");           //보여지는 영역
const sliderInner = document.querySelector(".slider__inner");       //움직이는 영역
const slider = document.querySelectorAll(".slider");                //개별 이미지

let currentIndex = 0;                
let interval = 5000;                             //현재 이미지
let sliderCount = slider.length;                                    //이미지 갯수
let sliderWidth = sliderImg.offsetWidth;                            //이미지 넓이값 구하기
let sliderClone = sliderInner.firstElementChild.cloneNode(true);    //첫번째 이미지를 복사
let sliderLength = document.querySelectorAll(".slider").length;
sliderInner.appendChild(sliderClone);                               //첫번째 이미지를 마지막에 넣음    




function gotoSlider(num) {
	sliderInner.style.transition = "all 0.4s";
	sliderInner.style.transform = "translateX(" + -sliderWidth * num + "px)";
	currentIndex = num;
}



document.querySelectorAll(".slider__dot .dot").forEach((dot, index) => {
	dot.addEventListener("click", () => {
		gotoSlider(index);
	});
})

window.addEventListener("load", () => {
                // 창 실행되면 오토플레이 실행시키기 위함. init()에만 쓰면 무한실행
                autoPlay(); // 자동 플레이
            });

function autoPlay() {
                sliderTimer = setInterval(() => {
                    // 셋인터벌 실행시킴
                    let intervalNum = currentIndex + 1; // 복사된 값때문에 시작값은 1임,
                    if (intervalNum == sliderLength - 1) intervalNum = 0; // 마지막 이미지에서 다음이미지 넘어가는 과정에 0으로 초기화
                    gotoSlider(intervalNum); // 슬라이더 이동함수에 변경된 인덱스 부여
                }, interval); // 언제? 3초마다 (ex_ 최초 로드시 0->1 되는 과정이 3초후에 일어남.)
            }
