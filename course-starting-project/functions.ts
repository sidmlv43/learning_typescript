function summate(n1: number, n2: number) {
  return n1 + n2;
}

const printRes = (num: number) => {
  console.log(`result = ${num}`);
};

// let combinValues: (a: number, b: number) => any;

// combinValues = add;

// printRes(combinValues(1, 2));

function addAndHandle(n1: number, n2: number, cb: (x: number) => void): void {
  cb(n1 + n2);
}

addAndHandle(1, 2, printRes);

// unknown type
