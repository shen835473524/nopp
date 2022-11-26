((function (window) {
    let elements = []
    //创建小蛇对象
    function Snake(width, height, direction) {
        this.width = width || 20
        this.height = height || 20
        this.body = [{
            x: 3, y: 2, color: 'red'  // 蛇头
        }, {
            x: 2, y: 2, color: 'orange'  // 蛇身体
        }, {
            x: 1, y: 2, color: 'orange'  // 蛇身体
        }]
        this.direction = direction || 'right'
    }

    Snake.prototype.init = function (map) {
        //循环遍历每蛇的body
        for (let k of this.body) {
            let div = document.createElement('div')
            div.style.width = this.width + 'px'
            div.style.height = this.height + 'px'
            div.style.position = 'absolute'
            div.style.backgroundColor = k.color
            div.style.left = k.x * this.width + 'px'
            div.style.top = k.y * this.height + 'px'
            map.appendChild(div)
            elements.push(div)
        }
    }










    window.Snake = Snake
})(window))