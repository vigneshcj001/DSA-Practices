// Write a function that searches for an element in an array and returns
// the index, if the element is not present then just return -1

let arr1 = [4, 2, 0, 3, 19, 20, 12];

function search_element(num, arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (num === arr1[i]) {
            return i;
        }
    }
    return -1;
}

console.log(search_element(2, arr1));


// let arr = [4, 2, 0, 3, 19, 20, 12];
// function find_num(num){
//     const index = arr.indexOf(num);
//     return index;
// }
// console.log(find_num(2));
// console.log(find_num(2000));