const WebSocket = require('ws');
//创建websocket的服务器
const wss = new WebSocket.Server({
    port:8080
});
//与客服端进行连接
wss.on('connection',function(client){
    client.on('message',(message)=>{
        console.log(message);
        //广播所有信息给客户端
        wss.clients.forEach((client)=>{
            client.send(message);
        })
    })
})
//获取所有的客户端 它里面存着所有的客户端
wss.clients
console.log("启动websocket服务器");