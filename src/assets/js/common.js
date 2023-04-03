$(document).ready(function () {
  // wow animation
  $('.wow').addClass('animated');
  // wow
  new WOW().init();
});

// top_btn (부드럽게 스크롤)
$('.top_btn').click('click', function (event) {
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: 0
  }, 300);
});

/* toggle slide */
$(document).ready(function () {
  $('.view').show();
  $('.hidden').hide();
  $('.toggle_btn').on('click', function () {
    if ($(this).hasClass('toggle')) {
      $(this).next('.view').stop().slideDown();
      $(this).removeClass('toggle');
    } else {
      $(this).next('.view').stop().slideUp();
      $(this).addClass('toggle');
    }
  });
});



/* Modal */
function openModal(modalname) {
  document.get
  $("#" + modalname).show();
  $('body').addClass('noneScroll');
}
$('.modal .close').click(function () {
  $('.modal').hide();
  $('body').removeClass('noneScroll');
});


/* 핸드폰번호 입력 */
$(document).ready(function () {
  $("select[id*='phone_number']").css('color', 'transparent');
  // 국가번호 value값으로 불러오기 
  $("select[id*='phone_number']").change(function () {
    $("input[id*='phone_number_value']").val($(this).val());

    // 선택된 value 색상 바꾸기
    var current = $("select[id*='phone_number']").val();
    if (current != 'null') {
      $("select[id*='phone_number']").css('color', 'transparent');
    }
  });
});


/* 차량, 요금제 변경 버튼 */
$('.change_btn').on('click', function () {
  $('.vihicle_change').css('display', 'block');
  $('.vihicle_now').css('display', 'none');
});
$('.unchange_btn').on('click', function () {
  $('.vihicle_change').css('display', 'none');
  $('.vihicle_now').css('display', 'block');
});


/* 직접입력 시 인풋박스 나타내기 */
$(function () {
  $("#textarea").hide();
  $("#selbox").change(function () {
    if ($("#selbox").val() == "direct") {
      $("#textarea").show();
    } else {
      $("#ttextarea").hide();
    }
  })


  /* textarea 글자수 제한 */
  $(document).ready(function () {
    $('#text_word').on('keyup', function () {
      $('#text_cnt').html("(" + $(this).val().length + " / 3000)");

      if ($(this).val().length > 3000) {
        $(this).val($(this).val().substring(0, 3000));
        $('#text_cnt').html("(3000 / 3000)");
      }
    });
  });
  //자동 높이 조절
  function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = (12 + obj.scrollHeight) + "px";
  }
});


/* 탭버튼 S */
$(document).ready(function () {
  $("#tab-btn li a").click(function (event) {
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

tabItem.forEach((tab, idx) => {
  tab.addEventListener('click', function () {
    tabInner.forEach((inner) => {
      inner.classList.remove('active')
    })

    tabItem.forEach((item) => {
      item.classList.remove('active')
    })

    tabItem[idx].classList.add('active')
    tabInner[idx].classList.add('active')
  })
})

// 탭버튼 li수에 맞춰 너비값 변경
$(document).ready(function () {
  var n = $('.sub .tab_btn > li').length;
  var m = $('.modal .tab_btn > li').length;
  $('.sub .tab_btn > li').css({ 'width': 'calc(100% / ' + n + ')' });
  $('.modal .tab_btn > li').css({ 'width': 'calc(100% / ' + m + ')' });
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


/* 버튼 클릭 숫자 증감 s */
function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  // 더하기/빼기
  if (type === 'plus') {
    number = parseInt(number) + 1;
  } else if (type === 'minus') {
    number = parseInt(number) - 1;
  }
  // 결과 출력
  resultElement.innerText = number;
}
/* 버튼 클릭 숫자 증감 e */


/* 이미지 다중 업로드 s */
(imageView = function imageView(att_zone, btnAtt) {

  var attZone = document.getElementById(att_zone);
  var btnAtt = document.getElementById(btnAtt)
  var sel_files = [];

  // 이미지와 체크 박스를 감싸고 있는 div 속성
  var div_style = 'position: relative;display: inline-flex;justify-content: center;align-items: center;width: 33%;aspect-ratio: 16 / 9; border:1px solid #ddd;margin-right: 10px;padding:10px';
  // 미리보기 이미지 속성
  var img_style = 'max-width:100%';
  // 이미지안에 표시되는 체크박스의 속성
  var chk_style = 'width: 20px;height: 20px; padding:0; margin-top:0; position: absolute;font-size: 12px;right: 5px;top: 5px;z-index: 999;border: none;border-radius: 50px;background: var(--main-color);color: #fff;cursor:pointer';

  btnAtt.onchange = function (e) {
    var files = e.target.files;
    var fileArr = Array.prototype.slice.call(files)
    for (f of fileArr) {
      imageLoader(f);
    }
  }

  /*첨부된 이미리즐을 배열에 넣고 미리보기 */
  imageLoader = function (file) {
    sel_files.push(file);
    var reader = new FileReader();
    reader.onload = function (ee) {
      let img = document.createElement('img')
      img.setAttribute('style', img_style)
      img.src = ee.target.result;
      attZone.appendChild(makeDiv(img, file));
    }

    reader.readAsDataURL(file);
  }

  /*첨부된 파일이 있는 경우 checkbox와 함께 attZone에 추가할 div를 만들어 반환 */
  makeDiv = function (img, file) {
    var div = document.createElement('div')
    div.setAttribute('style', div_style)

    var btn = document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', 'x')
    btn.setAttribute('delFile', file.name);
    btn.setAttribute('style', chk_style);
    btn.onclick = function (ev) {
      var ele = ev.srcElement;
      var delFile = ele.getAttribute('delFile');
      for (var i = 0; i < sel_files.length; i++) {
        if (delFile == sel_files[i].name) {
          sel_files.splice(i, 1);
        }
      }

      dt = new DataTransfer();
      for (f in sel_files) {
        var file = sel_files[f];
        dt.items.add(file);
      }
      btnAtt.files = dt.files;
      var p = ele.parentNode;
      attZone.removeChild(p)
    }
    div.appendChild(img)
    div.appendChild(btn)
    return div
  }
}
)('att_zone', 'btnAtt')

function fileUploadAction() {
  $("#btnAtt").trigger('click');
}






