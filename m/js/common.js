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
    alert(i);
    $('.showContent div.shouDiv').eq(i).show().siblings().hide();
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