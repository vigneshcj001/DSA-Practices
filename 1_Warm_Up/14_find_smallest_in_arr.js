let arr =[-2,-109,-20 ]
function findSmallest(arr){
    let smallest = Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<smallest){
            smallest =arr[i];
        }
    }
    return smallest;
}
let result = findSmallest(arr);
console.log(result);