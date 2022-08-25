const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten(array) {
    let arrayMaster = [];
    const umArraySo = array.reduce((acc, curr) => {
        curr.reduce((acc2, curr2) => {
            arrayMaster.push(curr2);
        }, 0);
    },0);
    return arrayMaster;
};

console.log(flatten(arrays));
