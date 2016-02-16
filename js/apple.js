$(function(){
    $(window).resize(function(){
        var clientW = $(window).width();
        if(clientW<=730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".son").hide();
        }
        if(clientW<=766) {
            $('.footer-section h3 span').css('display', 'block');
            $('.footer-section ul').css('display','none');
        }else{
            $('.footer-section h3 span').css('display','none');
            $('.footer-section ul').css('display','block');
        }
    })
    $(window).resize();
    $(".slide").click(function(){
        $('.slide-list').slideToggle()
        $(".son").finish();
        //$('.son').slideToggle();
    })
    $('.footer-section h3 span').click(function(){
        var index = $(this).index('.footer-section h3 span');
        $('.footer-section ul').finish();
        $('.footer-section ul').eq(index).slideToggle();
    })
    //                   --------------------ÂÖ²¥----------------------------------
    var num = 0;
    function move(){
        num = num+1;
        if(num>=$('.list-all .list').length-1){
            $('.list-all').animate({marginLeft:num*-100+'%'},function(){
                num=0;
                $('.list-all').css({marginLeft:0});
                $('.btn li').css({background:'#888',border:'none'})
                $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
            });
        }else{
            $('.list-all').animate({marginLeft:(num)*-100+'%'});
            $('.btn li').css({background:'#888',border:'none'})
            $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
        }
    }
    var t = setInterval(move,4000);
    $('.banner').hover(function(){
        clearInterval(t);
    },function(){
       t = setInterval(move,4000);
    })
    $('.btn li').click(function(){
        var index = $(this).index('.btn li');
        clearInterval(t);
        num = index;
        $('.list-all').animate({marginLeft:(num)*-100+'%'});
        $('.btn li').css({background:'#888',border:'none'})
        $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
    })
    $('a').click(function(){
        return false;
    })
    var margin;
    touch.on(".list-all","dragstart",function(e){
        margin=$(".list-all")[0].offsetLeft;
        console.log(margin);
    })
    touch.on(".list-all","drag",function(e){
        $('.list-all').css({marginLeft: margin+e.x})
    })
    touch.on(".list-all","dragend",function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction == 'left'){
                num = num+1;
                if(num>=$('.list-all .list').length-1){
                    $('.list-all').animate({marginLeft:num*-100+'%'},function(){
                        num=0;
                        $('.list-all').css({marginLeft:0});
                        $('.btn li').css({background:'#888',border:'none'})
                        $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
                    });
                }else{
                    $('.list-all').animate({marginLeft:(num)*-100+'%'});
                    $('.btn li').css({background:'#888',border:'none'})
                    $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
                }
            }else{
                num--;
                if(num<0){
                    num= 0;
                    $('.list-all').animate({marginLeft:(-num)*100+'%'});
                    $('.btn li').css({background:'#888',border:'none'})
                    $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
                    return;
                }else{
                    $('.list-all').animate({marginLeft:(num)*-100+'%'});
                    $('.btn li').css({background:'#888',border:'none'})
                    $('.btn li').eq(num).css({background:'none',border:'1px solid green'})
                }
            }
        }else{
            $('.list-all').animate({marginLeft:(num)*-100+'%'});
        }
    })
    $(".list-all").mousedown(function(e){
        e.preventDefault();
    })





})