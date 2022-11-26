//获取时间 格式
function getTime() {
    let a = new Date()
    let year = a.getFullYear()
    let month = a.getMonth() + 1
    month = month < 10 ? "0" + month : month
    let day = a.getDate()
    day = day < 10 ? "0" + day : day
    let hh = a.getHours()
    hh = hh < 10 ? "0" + hh : hh
    let mm = a.getMinutes()
    mm = mm < 10 ? "0" + mm : mm
    let ss = a.getSeconds()
    ss = ss < 10 ? "0" + ss : ss
    return `${year}-${month}-${day} ${hh}:${mm}:${ss} `
}

//封装一个随机颜色功能
function changeColor() {
    var str = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    var color = "#"
    for (let i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return color;
}
// 随机验证码
function yzm() {
    var str = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var pwd = "    "
    for (let i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * str.length)
        pwd += str[index]

    }
    return pwd;
}


//作用求两个日期时间的时间间隔
function getSpaceBetweenDate(date1, date2) {
    //1.得到两个日期之间的秒数
    var between = Math.round(Math.abs(date1 - date2) / 1000);
    //2.把秒数转换成相差多少天  多少小时  多少分钟  多少秒
    var day = Math.floor(between / (24 * 60 * 60));
    var hour = Math.floor(between / 60 / 60) % 24;
    var minute = Math.floor(between / 60) % 60;
    var second = between % 60;
    //3.包装一个对象返回
    var obj = {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
    return obj;
}

//去重
function cut() {
    var o = {};
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (o[item]) {
            o[item]++;
        } else {
            o[item] = 1;
        }
    }
    var tmpArray = [];
    for (var key in o) {
        if (o[key] == 1) {
            tmpArray.push(key);
        } else {
            if (tmpArray.indexOf(key) == -1) {
                tmpArray.push(key);
            }
        }
    }
    return tmpArray;
}

//获取元素
function my(ele) {
    return document.querySelector(ele)
}

function mys(ele) {
    return document.querySelectorAll(ele)
}
function myName(ele) {
    return document.getElementsByName(ele)
}
//随机数函数
function random(a, b) {
    return Math.floor(Math.random() * (b - a)) + a
}

//分割数组
function spliceArr(n, arr) {
    let newArr = []
    while (arr.length > 0) {
        newArr.push(arr.splice(0, n))
    }
    return newArr
}


//几行几列数据
//创建五行五列表格
function createTable(rows, cols) {
    let table = document.createElement('table')
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            td.style.width = "45px"
            td.style.height = "45px"
            td.style.backgroundColor = 'pink'
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}


//获得屏幕宽度
function getW_h() {
    let w = document.documentElement.clientWidth || document.body.clientWidth
    let h = document.documentElement.clientHeight || document.body.clientHeight
    return {
        w: w,
        h: h
    }
}

//判断浏览器类型
function userBrowser() {
    var browserName = navigator.userAgent.toLowerCase();
    // 正则  
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        console.log("IE");
        alert('IE 请更换速度更快的浏览器')
    } else if (/firefox/i.test(browserName)) {
        console.log("Firefox");
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        console.log("Chrome");
    } else if (/opera/i.test(browserName)) {
        console.log("Opera");
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        console.log("Safari");
    } else {
        console.log("不知道什么鬼!");
    }
}

// //获取ulr地址search的各项信息
function sliceInfo(str) {
    let str1 = str || str.toString()
    let arr = str1.split('?')[1].split('&')
    let o = {}
    for (let k of arr) {
        o[k.split("=")[0]] = k.split("=")[1]
    }
    return o
}
//获取元素样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[name]
    } else {
        return obj.currentStyle[name]
    }
}

//  动画函数
function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) { callback() };
        } else {
            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 15)
};

//动画函数
function move(obj, target, speed) {
    clearInterval(obj.timer)
    let current = parseInt(getStyle(obj, 'left'))
    if (current > target) {
        speed = -speed
    }
    obj.timer = setInterval(function () {
        let old = parseInt(getStyle(obj, 'left'))
        let n = old + speed
        if (speed > 0 && n >= target || speed < 0 && n <= target) {
            n = target
        }
        obj.style.left = n + 'px'
        if (n === target) {
            clearInterval(obj.timer)
        }
    }, 100)
}