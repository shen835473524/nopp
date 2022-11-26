; (function (w) {

    //轮播对象
    //多个图片lis
    //当前播放的图片img的地址
    function Swiper(lis, img) {
        this.img = img || "img/q.jpg"
        this.lis = lis || ["img/q.jpg", "img/q2.jpg", "img/q3.jpg", "img/q4.jpg", "img/q5.jpg", "img/q6.jpg", "img/q7.jpg"]

        //索引
        this.i = 0
        //图片的对象
        this.image = null
        //定时器
        this.timer = null
    }

    Swiper.prototype.init = function () {
        //处理数据
        this.getData()
        //展示轮播图片
        this.createBan()
        //展示箭头
        this.createArrow()

    }

    Swiper.prototype.getData = function () {
        //图片数据我们这里已经给了静态数据lis
        //基于图片创建圆点
        this.createPointer()

    }

    Swiper.prototype.createPointer = function () {
        //有几张图片就有几个圆点
        this.lis.forEach((element, index) => {
            //在页面上创建节点
            let span = document.createElement("span");
            span.className = "lis"
            span.index = index
            document.querySelector(".circle").appendChild(span)
        });

        //给第一个圆点加默认样式
        document.querySelectorAll(".lis")[0].classList.add("active")
    }

    Swiper.prototype.createBan = function () {
        //往这个container这个div中放图片
        this.image = document.createElement("img")
        this.image.src = "img/q.jpg"
        this.image.style.width = "100%"
        this.image.style.height = "100%"

        document.querySelector(".container").appendChild(this.image)
        //启用定时器改变图片
        this.changeImage()
    }

    Swiper.prototype.changeImage = function () {
        this.timer = setInterval(() => {
            //简写的定时器会指向上一层对象,实在不清楚就打印
            //console.log(this);
            this.i++

            //7>=7
            if (this.i >= this.lis.length) {
                //重新播放第一张图片
                this.i = 0
                // this.pointerMove(this.i)
            }
            //改变图片的地址
            this.image.src = this.lis[this.i]
            //改变圆点的样式
            this.pointerMove()

        }, 2000);
    }

    Swiper.prototype.pointerMove = function (a) {
        //移除所有的
        document.querySelectorAll(".lis").forEach((item) => {
            item.classList.remove('active')
        })
        //给当前这个圆点加样式
        document.querySelectorAll(".lis")[a || this.i].classList.add('active')
    }

    // 小圆点点击
    // Swiper.prototype.circleActions = function () {
    //     document.querySelectorAll(".lis").forEach((item, index) => {
    //         item.onclick = (event) => {
    //             //关闭定时器
    //             clearInterval(this.timer)
    //             // console.log(event.target.index);
    //             console.log(index);
    //             this.image.src = this.lis[index]
    //             this.i = index;
    //             // this.i 用的
    //             this.pointerMove()
    //             // console.log(this.getAttribute('index'));
    //         }
    //     }
    // }
    //小圆点点击方法
    Swiper.prototype.circleClick = function () {
        document.querySelectorAll('.lis').forEach((item, index) => {
            item.onclick = (() => {
                clearInterval(this.timer)  //点击时关闭定时器
                console.log(index);
                this.image.src = this.lis[index]
                this.pointerMove(index)
            })
        })
    }


    // 创建箭头

    Swiper.prototype.createArrow = function () {
        let next = document.createElement('div')
        next.className = 'right'
        next.innerHTML = '<img src="img/right.png" alt="">'
        next.style.position = "absolute"
        next.style.top = '50%'
        next.style.right = '50px'
        document.querySelector('.container').appendChild(next)
        let prev = document.createElement('div')
        prev.innerHTML = '<img src="img/left.png" alt="">'
        prev.className = 'left'
        prev.style.position = "absolute"
        prev.style.top = '50%'
        prev.style.left = '50px'
        document.querySelector('.container').appendChild(prev)
    }


    //点击箭头 切换图片
    Swiper.prototype.arrowClick = function () {
        document.querySelector('.right').onclick = (() => {
            clearInterval(this.timer)
            this.i++
            if (this.i >= this.lis.length) {
                this.i = 0
            }
            this.image.src = this.lis[this.i]
            this.pointerMove()
        })


        document.querySelector('.left').onclick = (() => {
            clearInterval(this.timer)
            this.i--
            if (this.i < 0) {
                this.i = this.lis.length - 1
            }
            this.image.src = this.lis[this.i]
            this.pointerMove()
        })
    }





    w.Swiper = Swiper

}(window))