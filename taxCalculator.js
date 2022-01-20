const solution = (transactions, taxRate) => {
  let numCalls = 0;
  const set = new Set(transactions);
  function calculateCostAfterTax(cost, taxRate) {
    numCalls = numCalls + 1;
    return cost * taxRate;
  }
  function computeTotal(taxRate) {
    return (cost) => {
      return calculateCostAfterTax(cost, taxRate);
    };
  }
  console.log(set);
  for (let num of set) {
    computeTotal(taxRate)(Number(num));
  }

  //transactions.map(computeTotal(taxRate));
  return numCalls;
};

//notes: remember that sets are iterables. Therefore, use a for of loop rather than for in.

console.log(solution([10, 24, 12, 13, 8, 10, 24], 1.2));
