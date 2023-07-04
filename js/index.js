$(document).ready(function(){

    // 슬라이드 배너
    var swiper = new Swiper(".sw-slide", {
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        pagination: {
            el: ".slide-s",
            clickable: true, //물방울에 클릭
            type: 'fraction', // 숫자
        },
        loop: true,  // 3번에서1번으로 계속 이동
        effect: "fade", 
        autoplay: true,
        speed: 1000, // 1000 -> 1초
    });

    // 슬라이드 배너 멈춤효과
    const slidebanner = $('sw-slide .swiper-wrapper')
    const pause = $('.sw-slide .swiper-start')

        pause.click(function(e){
        $(this).toggleClass('active')
        let temp = $(this).hasClass('active')
        if(temp) {
            swiper.autoplay.stop();
        }else {
            swiper.autoplay.start();
        }
    })


    // 주목해야할 브랜드 탭효과
    var text = ['헤라','메리쏘드','투쿨포스쿨','키스미','바이오더마','넘버즈인','바닐라코','스킨푸드','닥터지'];
    
    var bottomSwiper = new Swiper('.swiper-W-brand', {
        navigation: {
            prevEl: ".w-prev",
            nextEl: ".w-next",
        },
        pagination: {
            el: ".v-swiper",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
        slidesPerView: '1',
        pagination: {
        el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass:"custom_bullet",
          bulletActiveClass: "swiper-pagination-custom-bullet-active",
        
         renderBullet: function (index, className) {
           return '<div class="'+className+'"><span>'+ (text[index]) +'</span></div>'
         },
      },
      speed: 800,
      loop: true,
      touchRatio: 0.2,
      observer: true,
      observeParents: true
    });
    // 실시간 랭킹
    var text = ['<em>1</em>[리뷰이벤트/대용량] 파티온 노스카나인 트러블 세럼 단독 기획(50ml+15ml)','<em>2</em>[1등잡티세럼] 아이소이 BR 블레미쉬 케어 업 세럼 더블기획 (20ml+20ml)','<em>3</em>[2천만크림/1+1기획] 닥터지 레드블레미쉬 클리어 수딩 크림 70ml 1+1 기획(파우치 랜덤증정)','<em>4</em>[장원영 Pick] 이니스프리 비타C 그린티 엔자임 잡티 토닝 세럼 기획 세트 30ml','<em>5</em>[한정기획]아이소이 아크니닥터 1st 응급스팟 14ml 한정기획(+응급패드14매)','<em>6</em>트리셀 데이/나이트 콜라겐 샴푸 더블 기획(360ml+360ml) 2종 택 1','<em>7</em>[미연 Pick] 비원츠 피토 콜라겐 아이 세럼 스틱 15ml','<em>8</em>[리뷰이벤트] 에스트라 테라크네365 액티브 세럼 30ml','<em>9</em>한율 달빛유자 수면팩 70ml 튜브 1+1 기획','<em>10</em>성분에디터 그린토마토 포어 리프팅 앰플 토너 350ml+100ml 기획']
    var v_Swiper = new Swiper('.v-r-wrap', {
        direction: "vertical",
        slidesPerView: '1',
        pagination: {
        el: ".v_pagination_custom",
          clickable: true,
          bulletClass:"custom_bullet",
          bulletActiveClass: "swiper-pagination-custom-bullet-active",
    
     renderBullet: function (index, className) {
       return '<div class="'+className+'"><span>'+ (text[index]) +'</span></div>'
     },
  },
    autoplay:  {
    // delay: 3000,
    disableOnInteraction:false,
  },
  speed: 800,
  loop: true,
  touchRatio: 0.2,
  observer: true,
  observeParents: true,
});
   // gotop 버튼   
   $('.go_top').click(function(){
    $('html,body').animate({
        scrollTop : 0
    }, 0)
   })
})
