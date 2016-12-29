/**
 * Created by Administrator on 2016/9/23.
 */

window.onload = function () {
    var warp = document.getElementById("warp"),
        pic = document.getElementById("pic").getElementsByTagName("li"),
        list = document.getElementById("list").getElementsByTagName("li"),
        btn = document.getElementById("slider-btn"),
        tpBtn = document.getElementById("tp-banner"),
        banner = document.getElementById("tpBanner"),
        l_btn = document.getElementById("l-btn"),
        r_btn = document.getElementById("r-btn"),
        index = 0,
        timer = null;
    var life = document.getElementById("life");
    var icons = life.getElementsByTagName("i");



    //精灵图加图片
    for (var i = 0; i < icons.length; i++) {
        var temp = -25 * i;
        icons[i].style.backgroundPosition = "-25px " + temp + "px"
    }

    //top-banner点击消失
    tpBtn.onclick = function () {
        banner.style.display = "none";
    };

    //定时器
    timer = setInterval(slider, 2000);

    //鼠标划入,定时器停止
    warp.onmouseover = function () {
        clearInterval(timer);
        btn.style.display = "block";
    };

    //鼠标划出，定时器开启
    warp.onmouseout = function () {
        timer = setInterval(slider, 2000);
        btn.style.display = "none";
    };

    //点击按钮切换图片
    l_btn.onclick = function () {
        index -= 2;
        slider();
    };

    r_btn.onclick = function () {
        slider();
    };


    //play函数
    function slider() {
        if (++index >= pic.length) {
            index = 0;
        } else if (index < 0) {
            index = pic.length - 1;
        }
        changePic(index);

    }

    //切换图片的函数
    function changePic(curIndex) {
        for (var i = 0; i < pic.length; i++) {
            pic[i].style.opacity = 0;
            list[i].className = "";
        }

        pic[curIndex].style.opacity = 1;
        list[curIndex].className = "on";

    }

    //鼠标划在页签上面，停止计时器，手动切换
    for (var i = 0; i < pic.length; i++) {
        list[i].onmouseover = function () {
            clearInterval(timer);
            this.className = "on";
            index = this.innerText - 1;
            changePic(index);

        }
    }


}
