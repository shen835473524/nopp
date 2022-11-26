//引入express

let express = require('express');

//创建应用对象
let app = express()

//创建路由规则
// request 是对请求报文的封装 response 是对响应报文的封装
// app.get('/server', (request, response) => {

//     response.setHeader('Access-Control-Allow-Origin', '*')
//     //设置响应

//     response.send('hello ajax-6')
// })
app.all('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    response.send('hello ajax get/post')
})


//延时响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应
    setTimeout(() => {
        response.send('hello ajax-8')
    }, 2000)

})


app.all('/json-server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'AtGuiGu-123',
        age: 18
    }

    //设置响应体
    // JSON.stringify(data)node
    //send只能接受字符串或者buffer
    response.send(JSON.stringify(data))
})
//监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动,8000端口启动中.....');
})

