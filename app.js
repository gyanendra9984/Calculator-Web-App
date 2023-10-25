let ans = 0;
const notToDisplay = ['eql', 'inv', 'bkspc-btn', 'clear-btn']
const map = { 'E': '*10**', '÷': '/', '×': '*', 'sin(': 'Math.sin(', 'cos(': 'Math.cos', 'tan(': 'Math.tan', 'π': 'Math.PI', '^': '**', 'sin<sup>-1</sup>': 'Math.asin', 'cos<sup>-1</sup>': 'Math.acos', 'tan<sup>-1</sup>': 'Math.atan', 'e': 'Math.E', '√': 'Math.sqrt', 'log': 'Math.log10', 'ln': 'Math.log', 'Ans': 'ans' }
const inverse = { 'sin': 'sin<sup>-1</sup>', 'cos': 'cos<sup>-1</sup>', 'tan': 'tan<sup>-1</sup>', 'ln': 'e<sup>x</sup>', 'log': '10<sup>x</sup>', '√': 'x<sup>2</sup>', 'x<sup>y</sup>': '<sup>y</sup>√x', 'Ans': 'Rnd' }
const changeVal = { 'x!': '!', '<sup>n</sup>C<sub>r</sub>': 'C', '<sup>n</sup>P<sub>r</sub>': 'P', 'x<sup>y</sup>': '^', 'ln': 'ln(', 'log': 'log(', 'sin': 'sin(', 'cos': 'cos(', 'tan': 'tan(', 'sin<sup>-1</sup>': 'sin<sup>-1</sup>(', 'cos<sup>-1</sup>': 'cos<sup>-1</sup>(', 'tan<sup>-1</sup>': 'tan<sup>-1</sup>(', 'e<sup>x</sup>': 'e^', 'x<sup>y</sup>': '^', 'x<sup>2</sup>': '^2', '10<sup>x</sup>': '10^', '√': '√(', 'EXP': 'E', '<sup>y</sup>√x': '√' }

function fat(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "Invalid input";
    } else {
        return n * fat(n - 1);
    }
}
var operation = ['+', '-', '÷', '×', 'P', 'C', '^', '%', '!', '√', 'E','^2'];
var func = ['ln(', 'log(', 'sin(', 'cos(', 'tan(', 'sin<sup>-1</sup>(', 'cos<sup>-1</sup>', 'tan<sup>-1</sup>(', 'e^', '10^', '√('];

let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
    if (!notToDisplay.includes(buttons[i].className)) {
        buttons[i].addEventListener('click', () => {
            let display = document.getElementsByClassName('exp')[0];
            let x = buttons[i].innerHTML
            if (x == 'Rnd') {
                display.innerHTML += Math.random().toFixed(5)
            } else if (Object.keys(changeVal).includes(x)) {
                x = changeVal[x];
                if (operation.includes(x)) {
                    if (/[πe)]|[0-9]/.test(display.innerHTML.slice(-1))) {
                        display.innerHTML += x;
                    }
                } else if (func.includes(x)) {
                    if (!(/[πe)]|[0-9]/.test(display.innerHTML.slice(-1)))) {
                        display.innerHTML += x;
                    }
                } else {
                    display.innerHTML += x;
                }
            } else {
                if (operation.includes(x)) {
                    if (/[πe)]|[0-9]/.test(display.innerHTML.slice(-1))) {
                        display.innerHTML += x;
                    }
                } else {
                    display.innerHTML += x;
                }
            }
        })
    }
}

let exp = document.getElementsByClassName('exp')[0]
let eql = document.getElementsByClassName('eql')[0]
eql.addEventListener('click', () => {
    let x = exp.innerHTML.trim();

    var re = /([0-9]+)!/ig;
    var match;
    while ((match = re.exec(x)) != null) {
        x = x.replace(/([0-9]+)!/ig, `fat(${match[1]})`);
    }

    re = /([0-9]+)P([0-9]+)/ig;
    while ((match = re.exec(x)) != null) {
        x = x.replace(/([0-9]+)P([0-9]+)/ig, `fat(${match[1]})/fat(${match[1]}-${match[2]})`);
    }


    re = /([0-9]+)C([0-9]+)/ig;
    while ((match = re.exec(x)) != null) {
        x = x.replace(/([0-9]+)C([0-9]+)/ig, `fat(${match[1]})/(fat(${match[1]}-${match[2]})*fat(${match[2]}))`);
    }

    re = /([0-9]+)√([0-9]+)/ig;
    while ((match = re.exec(x)) != null) {
        x = x.replace(/([0-9]+)√([0-9]+)/ig, `Math.pow(${match[2]},1/${match[1]})`);
    }

    for (let op in map) {
        if (x.includes(op)) {
            x = x.replaceAll(op, map[op]);
        }
    }

    console.log(eval(x), typeof eval(x));
    let res = parseFloat(eval(x).toFixed(10));
    if (Math.floor(res) == res)
        res = parseInt(res.toFixed(0))
    ans = res
    exp.innerHTML = res;
})

let inv = document.getElementsByClassName('inv')[0]
inv.addEventListener('click', () => {
    for (let i = 0; i < buttons.length; i++) {
        let x = buttons[i].innerHTML
        for ([key, value] of Object.entries(inverse)) {
            if (x === key) {
                buttons[i].innerHTML = value
            }
            if (x === value) {
                buttons[i].innerHTML = key
            }
        }
    }
})

let backSpace = document.getElementsByClassName('bkspc-btn')[0]

backSpace.addEventListener('click', () => {
    display = document.getElementsByClassName('exp')[0]
    const x = display.innerHTML.trim()
    display.innerHTML = x.slice(0, -1);
})

// 
let clearButton = document.getElementsByClassName('clear-btn')[0]

clearButton.addEventListener('click', () => {
    display = document.getElementsByClassName('exp')[0]
    display.innerHTML = ''
})