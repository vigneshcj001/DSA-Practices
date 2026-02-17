let arr = [4,9,0,2.,8,7,1];

function second_largest_num_in_arr(arr){
    let largestNum = - Infinity;
    let secondLargestNum = - Infinity;

    for (let i = 0 ; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargestNum = largestNum;
            largestNum = arr[i];
        }
        else if (arr[i] > secondLargestNum && arr[i] !== largestNum) {
            secondLargestNum = arr[i]
        }
    }
    return secondLargestNum === -Infinity ? null : secondLargestNum;
}

let result = second_largest_num_in_arr(arr);
console.log(result);