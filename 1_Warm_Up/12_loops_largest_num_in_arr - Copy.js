let arr = [5,0,7,10,8,17,1];
function findLargest(arr){
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i]<arr[i-1]){
            number = arr[i-1];
        }
        else{
            number=arr[i]
        }
    }
    return number;
}
let result = findLargest(arr);
console.log(result);
