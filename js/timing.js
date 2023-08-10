let oSpan = document.getElementsByTagName("timing")[0];
let localhostTime = new Date();//获取页面打开的时间
function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
setInterval(function () {
    let goTime = new Date();//获取动态时间
    let diffTime = goTime.getTime() - localhostTime.getTime();
    var second = Math.floor(diffTime / 1000);//未来时间距离现在的秒数
    var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400;//余数代表剩下的秒数；
    var hour = Math.floor(second / 3600);//整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    // var str = tow(day) + '<span class="time">天</span>'
    //     + tow(hour) + '<span class="time">小时</span>'
    //     + tow(minute) + '<span class="time">分钟</span>'
    //     + tow(second) + '<span class="time">秒</span>';
    var str = tow(hour) + '<span class="time">小时</span>'
        + tow(minute) + '<span class="time">分钟</span>'
        + tow(second) + '<span class="time">秒</span>';
    oSpan.innerHTML = "您已浏览网页" + str;
}, 1000)


作者: 花猪
链接: https://cnhuazhu.gitee.io/2021/02/24/Hexo%E9%AD%94%E6%94%B9/Hexo%E5%A2%9E%E6%B7%BB%E5%85%AC%E5%91%8A%E6%A0%8F%E8%AE%A1%E6%97%B6%E5%99%A8%E5%B0%8F%E9%83%A8%E4%BB%B6/
来源: 花猪のBlog
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。