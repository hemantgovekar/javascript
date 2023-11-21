const add = (nums) => {
    console.log("nums", nums);
    const total = nums.reduce((acc, curr) => acc + curr, 0);


    return total;
}


console.log(add([1, 2, 3, 4, 5]));
// console.log(add([1, 2, 3, 4, 5, 6, 33, 12]));