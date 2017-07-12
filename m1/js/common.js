/**
 * Created by Administrator on 2017/7/6 0006.
 */

/***************顶部导航******************/
$('#header-btn').click(function () {
    $('.header-nav').animate({marginLeft:'0%',opacity:'1',height:'100%'},500);
});
$('.header-nav').click(function () {
    /*$('.header-nav').animate({height:'0%',opacity:'0'},500);*/
    $('.header-nav').animate({marginLeft:'100%',opacity:'0',height:'0%'},500);
});

/**************主页图片展示*************/
$('#showTitle li').click(function () {
    $(this).css({background:'#5970ff',color:'#fff'}).siblings().css({background:'#fff',color:'#5970ff'});
    i = $(this).index();
    $('.showContent div.showDiv').eq(i).show().siblings().hide();
    $('.showContent div.showDiv').eq(i).children('a').show().parent().siblings().children('a').hide();
    $('#showImages').children('div.swiper-wrapper').eq(i).show().siblings().hide();
    $('.show-huodong').css({height:'auto',padding:'0.5rem 0'});
    $('.show-join').css({height:'auto',padding:'0.5rem 0'})
});

/**************底部按钮导航*************/
$('#bottomNav li').click(function () {
    var bgImages = [
        '../m/img/common/home-ico.png',
        '../m/img/common/home-ico2.png',
        '../m/img/common/phone-ico.png',
        '../m/img/common/phone-ico2.png',
        '../m/img/common/QQ-ico.png',
        '../m/img/common/QQ-ico2.png',
        '../m/img/common/top-ico.png',
        '../m/img/common/top-ico2.png'
    ];
    $(this).css({backgroundColor:'#5970ff',color:'#fff'}).siblings().css({backgroundColor:'#fff',color:'#fff'});
    $(this).children('a').css({color:'#fff'}).parent().siblings().children('a').css({color:'#000'});
    j = $(this).index();
    if(j == 0){
        $(this).children('a').css({background:'url('+bgImages[1]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.75rem 0.675rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.625rem 0.675rem'});
    }else if(j == 1){
        $(this).children('a').css({background:'url('+bgImages[3]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.75rem 0.675rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.625rem 0.675rem'});
    }else if(j == 2){
        $(this).children('a').css({background:'url('+bgImages[5]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.75rem 0.675rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.625rem 0.675rem'});
    }else if(j == 3){
        $(this).children('a').css({background:'url('+bgImages[7]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.625rem 0.675rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.75rem 0.675rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.5rem', backgroundSize: '0.7rem'});
    }
});
/**************列表页点击展开更多************/
var liLength = $('.list-con_top ul li').length;
if(liLength<5){
    $('.moreList').hide();
}else{
    $('.moreList').show();
}
var show = 0;
$('.moreList').click(function () {
   /* $('.list-con_top ul li').css({display:'block'});*/
    if(show == 0){
        $('.list-con_top ul li').show('slow');
        $(this).children('p').html('收起');
        show = 1;
        $(this).children('span').css({transform:'rotate(180deg)',backgroundPosition:'0 -0.05rem'});
    }else if(show == 1){
        $('.list-con_top ul li').not('li:eq(0),li:eq(1),li:eq(2),li:eq(3)').hide('slow');
        $(this).children('p').html('查看更多');
        show = 0;
       /* $(this).children('span').animate({rotate: '180deg'});*/
        $(this).children('span').css({transform:'rotate(0deg)',backgroundPosition:'0 0.1rem'});
    }
});
/**************点击缓慢返回顶部*************/
window.onload = function(){
    var obtn = document.getElementById('btn_top');  //获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部

    window.onscroll = function(){         //滚动条滚动事件

        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        /* if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
         obtn.style.display = 'block';
         }else{         //否则隐藏
         obtn.style.display = 'none';
         }*/

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    };

    obtn.onclick = function(){    //回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
};