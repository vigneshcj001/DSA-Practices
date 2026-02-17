let arr = [5,0,7,10,8,17,1];
function findLargest(arr){
    let largest=-1;
    for(let i = 0 ; i< arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
        
    }
    return largest;
}
let result = findLargest(arr);
console.log(result);
