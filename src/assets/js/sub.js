$( document ).ready(function(){
  // 로그인 페이지 헤더 푸터
  // sub_vis 에 sub_no_hd_ft 추가 시 사라짐
    if($(".sub_vis").hasClass("sub_no_hd_ft") === true) {
      $(".sub_vis").css({"display":"none"})
      $("#footer").css({"display":"none"})
    } else {
      $(".sub_vis").css({"display":"block"})
      $("#footer").css("display","block")
    }

  /* toggle slide s */
  $('.view').show();
  $('.toggle_btn').click(function(){
    if($(this).hasClass('toggle')){
      $(this).parent().next('.view').slideDown();
      $(this).removeClass('toggle');
    }else{
      $(this).parent().next('.view').slideUp();
      $(this).addClass('toggle');
    } 
  });
  /* toggle slide e */

});

  /* 이미지 다중 업로드 s */
  ( /* att_zone : 이미지들이 들어갈 위치 id, btn : file tag id */
    imageView = function imageView(att_zone, btn){
  
      var attZone = document.getElementById(att_zone);
      var btnAtt = document.getElementById(btn)
      var sel_files = [];
      
      // 이미지와 체크 박스를 감싸고 있는 div 속성
      var div_style = 'position: relative;display: inline-flex;justify-content: center;align-items: center;width: 33%;aspect-ratio: 16 / 9; border:1px solid #ddd;margin-right: 10px;padding:10px';
      // 미리보기 이미지 속성
      var img_style = 'max-width:100%';
      // 이미지안에 표시되는 체크박스의 속성
      var chk_style = 'width: 20px;height: 20px; padding:0; margin-top:0; position: absolute;font-size: 12px;right: 5px;top: 5px;z-index: 999;border: none;border-radius: 50px;background: var(--main-color);color: #fff;cursor:pointer';
    
      btnAtt.onchange = function(e){
        var files = e.target.files;
        var fileArr = Array.prototype.slice.call(files)
        for(f of fileArr){
          imageLoader(f);
        }
      }  
      
    
      // 탐색기에서 드래그앤 드롭 사용
      attZone.addEventListener('dragenter', function(e){
        e.preventDefault();
        e.stopPropagation();
      }, false)
      
      attZone.addEventListener('dragover', function(e){
        e.preventDefault();
        e.stopPropagation();
        
      }, false)
    
      attZone.addEventListener('drop', function(e){
        var files = {};
        e.preventDefault();
        e.stopPropagation();
        var dt = e.dataTransfer;
        files = dt.files;
        for(f of files){
          imageLoader(f);
        }
        
      }, false)
      
  
      
      /*첨부된 이미리즐을 배열에 넣고 미리보기 */
      imageLoader = function(file){
        sel_files.push(file);
        var reader = new FileReader();
        reader.onload = function(ee){
          let img = document.createElement('img')
          img.setAttribute('style', img_style)
          img.src = ee.target.result;
          attZone.appendChild(makeDiv(img, file));
        }
        
        reader.readAsDataURL(file);
      }
      
      /*첨부된 파일이 있는 경우 checkbox와 함께 attZone에 추가할 div를 만들어 반환 */
      makeDiv = function(img, file){
        var div = document.createElement('div')
        div.setAttribute('style', div_style)
        
        var btn = document.createElement('input')
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', 'x')
        btn.setAttribute('delFile', file.name);
        btn.setAttribute('style', chk_style);
        btn.onclick = function(ev){
          var ele = ev.srcElement;
          var delFile = ele.getAttribute('delFile');
          for(var i=0 ;i<sel_files.length; i++){
            if(delFile== sel_files[i].name){
              sel_files.splice(i, 1);      
            }
          }
          
          dt = new DataTransfer();
          for(f in sel_files) {
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
      console.log("fileUploadAction");
      $("#btnAtt").trigger('click');
  }
  /* 이미지 업로드 - 다중 (첨부파일) e */
  
  
  
  /* 첨부파일 s */
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });
  /* 첨부파일 e */
