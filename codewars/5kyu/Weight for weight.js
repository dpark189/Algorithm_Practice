function orderWeight(strng) {
    // your code
    let nums = strng.split(" ");
    nums.sort((num1, num2) => {
      let sum1 = num1.split("").map(el => parseInt(el)).reduce((acc, current) => acc + current);
      let sum2 = num2.split("").map(el => parseInt(el)).reduce((acc, current) => acc + current);
      if (sum1 - sum2 !== 0 ) {
        return sum1 - sum2;
      } else {
        let original = [num1, num2];
        let sorted = original.slice().sort();
        for(let i = original.length; i--;) {
          if (original[i] !== sorted[i]) {
            return -1;
          } else {
            return 1;
          }
        }
      }
    });
    return nums.join(" ");
}
