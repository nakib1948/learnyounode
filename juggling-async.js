const http=require('http')
const url=process.argv.slice(2)
let results=[]
let count=0

function printresult(){
    for(let i=0;i<results.length;i++)
    console.log(results[i])
}

function httpget(index){
    http.get(url[index],(response)=>{
        let result=""
        response.on('error',err=>console.error(err))
        response.setEncoding('utf8')
        response.on('data',data=>{
           result+=data
        })
        response.on('end',()=>{
           results[count]=result
           count++
           if(count===3)
            printresult()
         })
    
    })
}
for(let i=0;i<url.length;i++)
 httpget(i)