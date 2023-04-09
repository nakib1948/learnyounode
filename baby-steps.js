let arr=process.argv
let count=2,sum=0;
while(count<arr.length)
{
    sum+=parseInt(arr[count])
    count++
}
console.log(sum)