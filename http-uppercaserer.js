const http=require('http')
const map=require('through2-map')

const port=process.argv[2]
const server=http.createServer((req,res)=>{
   if(req.method != 'POST')
     return res.end('This server only accept post')

    req.pipe(map(chunk =>{
        return chunk.toString().toUpperCase()

    })).pipe(res)
})

server.listen(port)