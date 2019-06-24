function luckyNumber(str) {
    if (str === '' || str < 0) {
        console.log ('enter a correct number, please')
        } else {
            let one = Math.ceil(str.length / 2)
            let two = Math.floor(str.length / 2)
            let three = str.slice(0, two)
        let four = str.slice(one)
        if (sumOfString(three) === sumOfString(four)) {
            console.log(true)
        } else {
            console.log(false)
        }

    }
}


function sumOfString(str) {
    let i = function(x) {return parseInt(x, 10)}
    return str.split('').map(i).reduce((a, b) => a + b)
}


luckyNumber('003111')
luckyNumber('813372')
luckyNumber('913371')
luckyNumber('17935')
luckyNumber('56328116')
luckyNumber('')
luckyNumber('-003111')
