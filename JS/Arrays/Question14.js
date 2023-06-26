var array=[1,2,3,2,3,2,4,2,5,7,3,4];
var arr1=[]
for(var i=0;i<array.length;i++)
{
     var count=0;
    for(var j=i+1;j<array.length;j++)
    {
        if(array[i]==array[j])
        {
            count++
        }
    }
    if(count==0)
    {
        arr1.push(array[i])
    }
}
console.log(arr1)
// var array1=["banana","mango","banana","orange","mango"];
// var letters=new Set(array)
// var letters1=new Set(array1)

// console.log(Array.from(letters));
// console.log(Array.from(letters1));