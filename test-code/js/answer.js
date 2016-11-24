var item = "라이언";
var src;
var str = "";
var cnt = STORE[item].length;
var imgname;
var price;
var stock = 0;
var sto = "<span class="+"\"ico_soldout\">"+"Sold out<\/span>";



function el(){
    str = "";
    $('span.wrap_thumb').html(str);
    src = null;
    cnt = null;
}

function changeimg (item){
    for (var a = 0; a < cnt; a++) {
        src ="images/"+STORE[item][a]["images"];
        imgname = STORE[item][a]["name"];
        price = STORE[item][a]["price"];
        stock = STORE[item][a]["stock"];
        console.log(stock);
        str += "<li"+"><a href=\"javascript:;\" class=\"link_friends"+"\">";
        str += "<span class=\""+"wrap_thumb\""+">";
        str += "<img src=\"" + src + "\" class=\"thumb_items\" alt=\"\"/>";
        if(stock == 0){
            str += sto;

        }
        str += "<strong class=" + "\"tit_item\">" + imgname + "<\/strong>"
        + "<span class=" + "\"price_item\">" + price + "<\/span>";
        str += "<\/a><\/li>";

        $('ul.list_friends').html(str);

    }
}

changeimg(item);

$(document).ready(function(){

    // 메뉴 창
    $('div.wrap_btn_nav').click(function(e){

        $('div.wrap_nav').animate({ left : "100%"});
        e.stopPropagation();
    });
    $(document).click(function(e2){
        $('div.wrap_nav').animate({left : "-100%"});
        e2.stopPropagation();
    });

    // 캐릭터 상품


    $('span.total_number').html(STORE.라이언.length);
    console.log(cnt);
    //changeimg(item);
    $('#charSelect').change(function(){
        item = $('select.select_friends').val();
        console.log(item);
        if($('select.select_friends').val() == "라이언"){
            $('span.total_number').html(STORE.라이언.length);
            cnt = STORE.라이언.length ;
            str = "";
            if(cnt != 0) {

                changeimg(item);
            }
            else{
                el();

            }
        }
        else if($('select.select_friends').val() == "어피치"){
            $('span.total_number').html(STORE.어피치.length);
            cnt = STORE.어피치.length ;
            str = "";
            if(cnt != 0) {

                changeimg(item);
            }
            else
            {
                el();
                }
        }
        else {
            $('span.total_number').html(STORE.무지.length);
            cnt = STORE.무지.length;
            str = "";
            if (cnt != 0) {

                changeimg(item);
            }
            else {
                el();

            }

        }
    });












});

