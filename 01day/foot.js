(function (window) {
    //创建食物对象
    let elements = []
    function Food(width, height, x, y, color) {
        this.width = width || 20
        this.height = height || 20
        this.x = x || 0
        this.y = y || 0
        this.color = color || 'pink'
    }

    Food.prototype.init = function (map) {
        //创建小div 用来表示食物
        remove()
        let div = document.createElement('div')
        div.style.position = 'absolute'
        //食物样式
        div.style.width = this.width + 'px'
        div.style.height = this.height + 'px'
        div.style.backgroundColor = this.color
        //随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height
        div.style.left = this.x + 'px'
        div.style.top = this.y + 'px'
        map.appendChild(div)

        elements.push(div)
    }


    //删除食物的函数 
    function remove() {
        for (let i = 0; i < elements.length; i++) {
            //找到子元素的父亲 然后删除子元素
            elements[i].parentNode.removeChild(elements[i])
            elements.splice(i, 1)
        }

    }


    window.Food = Food
}(window))