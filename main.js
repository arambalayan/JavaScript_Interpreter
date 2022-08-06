const fs = require('fs');
const code = fs.readFileSync('./code.txt', 'utf-8');

const arithmeticOperators = {
    sum: "+",
    sub: "-",
    mul: "*",
    div: "/"
};

const comparisonOperators = {
    equal: "===",
    notEqual: "!==",
    greater: ">",
    less: "<",
};

const {sum, sub, mul, div} = arithmeticOperators;

const {equal, notEqual, greater, less} = comparisonOperators;

const rows = code.split('\n');

let rowArray = [];

for (let i = 0; i < rows.length; i++) {
    rowArray.push(rows[i].split(' '));
}

const varArray = rowArray.filter(t => t[2] === '=');

const variableNames = [];

for (let j = 0; j < varArray.length; j++) {
    variableNames.push(varArray[j][1]);
}

const calculate = (variable, operator) => {
    let x, y

    if (variable.includes('print')) {
        x = variable.split(' ')[1];
        y = variable.split(' ')[3];
    }
    if (variable.includes('?')) {
        x = variable.split(' ')[0];
        y = variable.split(' ')[2];
    }

    for (let i = 0; i < rowArray.length; i++) {
        for (let j = 0; j < varArray.length; j++) {
            if (varArray[j][1] === x) {
                x = varArray[j][varArray[j].length - 1];
            }
            if (varArray[j][1] === y) {
                y = varArray[j][varArray[j].length - 1];
            }
        }
    }

    if (operator === sum) {
        return +x + +y;
    }

    if (operator === sub) {
        return +x - +y;
    }

    if (operator === mul) {
        return +x * +y;
    }

    if (operator === div) {
        return +x / +y;
    }

    if (operator === equal) {
        return x === y;
    }
    if (operator === notEqual) {
        return x !== y;
    }
    if (operator === greater) {
        return x > y;
    }

    if (operator === less) {
        return x < y;
    }
}

const ifBlock = (index) => {
    if (!index.includes(':')) {
        throw new Error('Syntax error')
    }

    if (index.includes(equal)) {
        if (calculate(index.join(' '), equal)) {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(0, slice);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[5])
            }
        } else {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(slice + 1, index.length - 1);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[8])
            }
        }
    }

    if (index.includes(notEqual)) {
        if (calculate(index.join(' '), notEqual)) {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(0, slice);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[5])
            }
        } else {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(slice + 1, index.length - 1);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[8])
            }
        }
    }

    if (index.includes(greater)) {
        if (calculate(index.join(' '), greater)) {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(0, slice);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[5])
            }
        } else {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(slice + 1, index.length - 1);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[8])
            }
        }
    }

    if (index.includes(less)) {
        if (calculate(index.join(' '), less)) {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(0, slice);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[5])
            }
        } else {
            let slice = index.findIndex((element) => element === ':')
            let sliceArr = index.slice(slice + 1, index.length - 1);
            if (sliceArr.includes(sum) || sliceArr.includes(sub) || sliceArr.includes(mul) || sliceArr.includes(div)) {
                let sliceIndex = index.findIndex((element) => element === '+' || element === '-' || element === '*' || element === '/')
                let arr = index.slice(sliceIndex - 1, sliceIndex + 2);
                arr = ['print', ...arr]
                console.log(calculate(arr.join(' '), arr[2]))
            } else {
                console.log(index[8])
            }
        }
    }
}

for (let i = 0; i < rowArray.length; i++) {
    if (rowArray[i][2] === '=') {
        if (rowArray[i][0] !== 'var') {
            throw new Error(`Syntax error: Unexpected Identifier ${rowArray[i][0]}`);
        }

        if (rowArray[i].length === 3) {
            throw new Error('Syntax error')
        }

        const duplicateVariable = variableNames.find((value, index, array) => array.indexOf(value) !== index)

        if (duplicateVariable) {
            throw new Error(`Variable ${duplicateVariable} is already exist`);
        }
    }

    if (rowArray[i][0] === 'print' && rowArray[i].includes(sum)) {
        console.log(calculate(rows[i], sum));
    }

    if (rowArray[i][0] === 'print' && rowArray[i].includes(sub)) {
        console.log(calculate(rows[i], sub));
    }

    if (rowArray[i][0] === 'print' && rowArray[i].includes(mul)) {
        console.log(calculate(rows[i], mul));
    }

    if (rowArray[i][0] === 'print' && rowArray[i].includes(div)) {
        console.log(calculate(rows[i], div));
    }

    if (rowArray[i][3] === '?') {
        ifBlock(rowArray[i])
    }
}