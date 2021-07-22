const http = require('http')
//export를 반환하기 때문에 변수로 받아줘야 한다.

const server = http.createServer((req,res)=>{
    res.end('Hello')
})
//그리고 http라는 모듈안에는 createServer라는 함수가 내장되어 있다.
server.listen(3000)