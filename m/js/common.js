/**
 * Created by Administrator on 2017/7/6 0006.
 */

/***************��������******************/
$('#header-btn').click(function () {
   $('.header-nav').animate({marginLeft:'0%',opacity:'1',height:'100%'},500);
});
$('.header-nav').click(function () {
    /*$('.header-nav').animate({height:'0%',opacity:'0'},500);*/
    $('.header-nav').animate({marginLeft:'100%',opacity:'0',height:'0%'},500);
});

/**************��ҳͼƬչʾ*************/
$('#showTitle li').click(function () {
    $(this).css({background:'#5970ff',color:'#fff'}).siblings().css({background:'#fff',color:'#5970ff'});
    i = $(this).index();
    $('.showContent div.showDiv').eq(i).show().siblings().hide();
});

/**************�ײ���ť����*************/
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
        $(this).children('a').css({background:'url('+bgImages[1]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
    }else if(j == 1){
        $(this).children('a').css({background:'url('+bgImages[3]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
    }else if(j == 2){
        $(this).children('a').css({background:'url('+bgImages[5]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(3).children('a').css({background:'url('+bgImages[6]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
    }else if(j == 3){
        $(this).children('a').css({background:'url('+bgImages[7]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(0).children('a').css({background:'url('+bgImages[0]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(1).children('a').css({background:'url('+bgImages[2]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
        $('#bottomNav li').eq(2).children('a').css({background:'url('+bgImages[4]+')no-repeat 0.4rem 0.19rem', backgroundSize: '0.32rem'});
    }
});
/**************����������ض���*************/
window.onload = function(){
    var obtn = document.getElementById('btn_top');  //��ȡ�ص�������ť��ID
    var clientHeight = document.documentElement.clientHeight;   //��ȡ��������ĸ߶�
    var timer = null; //����һ����ʱ��
    var isTop = true; //����һ������ֵ�������ж��Ƿ񵽴ﶥ��

    window.onscroll = function(){         //�����������¼�

        //��ȡ�������Ĺ����߶�
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        /* if(osTop >= clientHeight){  //��������߶ȴ��ڿ�������߶ȣ�����ʾ�ص�������ť
         obtn.style.display = 'block';
         }else{         //��������
         obtn.style.display = 'none';
         }*/

        //��Ҫ�����жϵ� ����ص�������ť�� �������ڻع������У����ֶ��������������������ʱ��
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    };

    obtn.onclick = function(){    //�ص�������ť����¼�
        //����һ����ʱ��
        timer = setInterval(function(){
            //��ȡ�������Ĺ����߶�
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //���������ٶȲ����������Ч��
            var speed = Math.floor(-osTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //������ֹ�����¼������ʱ��
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
};