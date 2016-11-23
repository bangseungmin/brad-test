document.write('<script src="js/data.js"></script>');


$(document).ready(function(){
    $('div.wrap_btn_nav').click(function(){
        $('div.wrap_nav').css({left:'100%'});
    });
});

$(document).ready(function() {
    var item = $('select.select_friends').val();
    var src;
    var str;
    $('span.total_number').html(STORE.라이언.length);
    $('#charSelect').change(function(){
        item = $('select.select_friends').val();
        console.log(item);
        if($('select.select_friends').val() == "라이언"){
            $('span.total_number').html(STORE.라이언.length);
            for(var a=0; a<STORE.라이언.length; a++){
                src = "images/"+STORE.라이언[a].images;
                console.log(src);
                str += "<img src=\""+src+"\" class=\"thumb_items\" alt=\"\"/>"
                console.log(str);
                $('span.wrap_thumb').html(str);
                // $('span.wrap_thumb').attr("src",src);
            }
        }
        else if($('select.select_friends').val() == "어피치"){
            $('span.total_number').html(STORE.어피치.length);
        }
        else{
            $('span.total_number').html(STORE.무지.length);
        }

    });

});

