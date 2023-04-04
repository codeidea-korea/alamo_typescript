
/* toggle slide */
$(document).ready(function() {
  $('.view').show();
  $('.hidden').hide();
  $('.toggle_btn').on('click', function(){
    if($(this).hasClass('toggle')){
      $(this).next('.view').stop().slideDown();
      $(this).removeClass('toggle');
    }else{
      $(this).next('.view').stop().slideUp();
      $(this).addClass('toggle');
    } 
  });
});



/* 핸드폰번호 입력 - 국가번호 value값으로 불러오기 */
var selectBoxChange = function(value){
  $("#phone_number_value").val(value);
}


/* 차량, 요금제 변경 버튼 */
$('.change_btn').on('click', function(){
  $('.vihicle_change').css('display','block');
  $('.vihicle_now').css('display','none');
});
$('.unchange_btn').on('click', function(){
  $('.vihicle_change').css('display','none');
  $('.vihicle_now').css('display','block');
});


/* 직접입력 시 인풋박스 나타내기 */
$(function () {
  $("#textarea").hide();
  $("#selbox").change(function () {
    if ($("#selbox").val() == "direct") {
      $("#textarea").show();
    } else {
      $("#textarea").hide();
    }
  })
});


/* textarea 글자수 제한 */
$(document).ready(function() {
  $('#text_word').on('keyup', function() {
      $('#text_cnt').html("("+$(this).val().length+" / 3000)");

      if($(this).val().length > 3000) {
          $(this).val($(this).val().substring(0, 3000));
          $('#text_cnt').html("(3000 / 3000)");
      }
  });
});
  //자동 높이 조절
function resize(obj) {
  obj.style.height = "1px";
  obj.style.height = (12+obj.scrollHeight)+"px";
}



/* 탭버튼 S */
$(document).ready(function() {
  $("#tab-btn li a").click(function(event) {
    event.preventDefault();
    var selectAtt = $(this).attr("data-category");

    $("#tab-btn li a").removeClass("active_tab");
    $(this).addClass("active_tab");

    $(".all").hide();
    $("." + selectAtt).fadeIn();
  });
});

//tab
const tabItem = document.querySelectorAll('.tab_item')
const tabInner = document.querySelectorAll('.tab_inner')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')
    })
})

//
$( document ).ready( function() {
var n = $( '.sub .tab_btn > li' ).length;
var m = $( '.modal .tab_btn > li' ).length;
$( '.sub .tab_btn > li' ).css({ 'width': 'calc(100% / ' + n + ')' });
$( '.modal .tab_btn > li' ).css({ 'width': 'calc(100% / ' + m + ')' });
});

//
const btn = document.querySelector('.disabled-selected');
const list = document.querySelector('.list-member');
btn.addEventListener('click', () => {
  btn.classList.toggle('on');
});
list.addEventListener('click', (event) => {
  if (event.target.nodeName === "A") {
      btn.innerText = event.target.innerText;
      btn.classList.remove('on');
  }
});



/* Modal */
function openModal(modalname) {
  document.get
  $("#" + modalname).show();
  $('body').addClass('noneScroll');
}
$('.close').click(function() {
  $('.modal').hide();
  $('body').removeClass('noneScroll');
});


/* 버튼 클릭 숫자 증감 s */
function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
  }
  // 결과 출력
  resultElement.innerText = number;
}
/* 버튼 클릭 숫자 증감 e */




