let arr =[2,-9,17,1,0,-10,-4,18];
function countNeg(arr){
    let count = 0;
    for (let i = 0 ; i<arr.length;i++){
        if (arr[i]<0){
            count++;
        }
    }
    return count;
}
const result = countNeg(arr);
console.log(result)