// assignment 1
console.log(`==========assignment 1==========`);
function max(numbers) {
  const maxNum = numbers.sort((a, b) => b - a);
  return maxNum[0];
}
console.log("the ans 1 = ", max([1, 2, 4, 5]));
console.log("the ans 1 = ", max([5, 2, 7, 1, 6]));

// assignment 2
console.log(`==========assignment 2==========`);
function calculate(args) {
  if (args.op === "+") {
    return args.n1 + args.n2;
  }
  if (args.op === "-") {
    return args.n1 - args.n2;
  }
  return "Not supported";
}
console.log("the ans 2 = ", calculate({ n1: 2, n2: 3, op: "+" }));
console.log("the ans 2 = ", calculate({ n1: 5, n2: 2, op: "-" }));
console.log("the ans 2 = ", calculate({ n1: 1, n2: 6, op: "x" }));

// assignment 3
console.log(`==========assignment 3==========`);

function calculate_3(data) {
  const ans = data.products.reduce((acc, cur) => (acc += cur.price * 0.1), 0);
}

const discountedPrice = calculate_3({
  discount: 0.1,
  products: [
    { name: "Product 1 ", price: 100 },
    { name: "Product 2 ", price: 700 },
    { name: "Product 3 ", price: 250 },
  ],
});

console.log("(3) discountedPrice : ", discountedPrice);

// assignment 4
console.log(`==========assignment 4============`);
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (nums.includes(another)) {
      return [nums.indexOf(nums[i]), nums.indexOf(another)];
    }
  }
}

console.log("(4) twoSum([2,7,11,15],9) : ", twoSum([2, 7, 11, 15], 9));
console.log(
  "(4) twoSum([6, 23, 200, 100, 33, 102, 35, 46], 135) : ",
  twoSum([6, 23, 200, 100, 33, 102, 35, 46], 135)
);

// assignment 5
console.log(`==========assignment 5==========`);
function delyaedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}

delyaedResult(4, 5, 3000, function (result) {
  console.log("the answer 5 is :" + result);
});
delyaedResult(-5, 10, 2000, function (result) {
  window.alert("the answer 5 is :" + result);
});
