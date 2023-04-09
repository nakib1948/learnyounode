const fs = require('fs')

fs.readFile(process.argv[2],(err,data)=>{
    if(err)console.error(err)
    const result=data.toString().split('\n').length-1
    console.log(result)
})
