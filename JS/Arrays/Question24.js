var arr=[NaN, 0, 15, false, -22, '',undefined, 47, null];
var newArray=[];
for(var i=0;i<arr.length;i++){
    // if(typeof arr[i]==='number'&& arr[i]!=0 && arr[i]!=NaN){
        if(Number.isInteger(arr[i])&& arr[i]!=0){
        newArray.push(arr[i]);
    }
}
console.log(newArray);
