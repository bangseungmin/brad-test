document.write('<script src="js/data.js"></script>');
document.write('<script src="js/flipsnap"></script>');


$(document).ready(function(){

    // 메뉴 창
    $('div.wrap_btn_nav').click(function(e){
        /* if($('div.wrap_nav').animate({ left : "100%"}) == 'block'){
         if(!$('div.wrap_nav, div.wrap_btn_nav').has(e.target).length){
         $('div.wrap_nav').hide();
         }  ;
         };*/
        $('div.wrap_nav').animate({ left : "100%"});
        e.stopPropagation();
    });
    $(document).click(function(e2){
        $('div.wrap_nav').animate({left : "-100%"});
        e2.stopPropagation();
    });

    // 캐릭터 상품
    var item = $('select.select_friends').val();
    var src;
    var str = "";
    var cnt;
    var imgname;
    var price;
    var imgstr;
    /*
     function changeimg (item){
     for (var a = 0; a < cnt; a++) {
     imgstr = "STORE."+item+"["+a+"].images";
     console.log(imgstr) ;
     src = "images/"+ imgstr;
     console.log(src);
     str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>"
     console.log(str);
     $('span.wrap_thumb').html(str);
     // $('span.wrap_thumb').attr("src",src);
     }
     }
     */
    //  <strong class="tit_item">상품명</strong>
    //  <span class="price_item">가격</span>

    for (var a = 0; a < STORE.라이언.length; a++) {
        src = "images/" + STORE.라이언[a].images;
        imgname = STORE.라이언[a].name;
        //imgname = STORE[item][a]["name"];
        price = STORE.라이언[a].price;
        console.log(imgname);
        console.log(src);
        str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>" + "<strong class=" + "\"tit_item\">" + imgname + "<\/strong>"
        + "<span class=" + "\"price_item\">" + price + "<\/span>";
        //console.log(str);
        $('span.wrap_thumb').html(str);
        // $('span.wrap_thumb').attr("src",src);
    }
    $('span.total_number').html(STORE.라이언.length);

    $('#charSelect').change(function(){
        item = $('select.select_friends').val();
        console.log(item);
        if($('select.select_friends').val() == "라이언"){
            $('span.total_number').html(STORE.라이언.length);
            cnt = STORE.라이언.length ;
            str = "";
            //changeimg(item);
            if(cnt != 0) {
                for (var a = 0; a < cnt; a++) {
                    src = "images/" + STORE.라이언[a].images;
                    imgname = STORE.라이언[a].name;
                    price = STORE.라이언[a].price;
                    console.log(imgname);
                    console.log(src);
                    str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>" + "<strong class=" + "\"tit_item\">" + imgname + "<\/strong>"
                    + "<span class=" + "\"price_item\">" + price + "<\/span>";
                    //console.log(str);
                    $('span.wrap_thumb').html(str);
                    // $('span.wrap_thumb').attr("src",src);
                }
            }
            else{
                str = "";
                $('span.wrap_thumb').html(str);
                src = null;
                cnt = null;
            }
        }
        else if($('select.select_friends').val() == "어피치"){
            $('span.total_number').html(STORE.어피치.length);
            cnt = STORE.어피치.length ;

            str = "";
            //changeimg(item);
            if(cnt != 0) {
                for (var a = 0; a < cnt; a++) {
                    src = "images/" + STORE.어피치[a].images;
                    imgname = STORE.어피치[a].name;
                    price = STORE.어피치[a].price;
                    console.log(src);
                    str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>" + "<strong class=" + "\"tit_item\">" + imgname + "<\/strong>"
                    + "<span class=" + "\"price_item\">" + price + "<\/span>";
                    //console.log(str);
                    $('span.wrap_thumb').html(str);
                    // $('span.wrap_thumb').attr("src",src);
                }
            }
            else
            {
                str = "";
                $('span.wrap_thumb').html(str);
                src = null;
                cnt = null;
            }
        }

        else {
            $('span.total_number').html(STORE.무지.length);
            cnt = STORE.무지.length;

            str = "";
            //changeimg(item);
            if (cnt != 0) {
                for (var a = 0; a < cnts; a++) {
                    src = "images/" + STORE.무지[a].images;
                    imgname = STORE.무지[a].name;
                    price = STORE.무지[a].price;
                    console.log(src);
                    str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>" + "<strong class=" + "\"tit_item\">" + imgname + "<\/strong>"
                    + "<span class=" + "\"price_item\">" + price + "<\/span>";
                    //console.log(str);
                    $('span.wrap_thumb').html(str);
                    // $('span.wrap_thumb').attr("src",src);
                }
            }
            else {
                str = "";
                $('span.wrap_thumb').html(str);
                src = null;
                cnt = null;
            }

        }
    });

    // 이미지 슬라이드

//    <a href="javascript:;" class="btn_slide btn_prev">왼쪽으로 넘기기</a>
//    <a href="javascript:;" class="btn_slide btn_next">오른쪽으로 넘기기</a>

    Flipsnap('ul.list_slide', {
        distance : '100%'
    });















});

