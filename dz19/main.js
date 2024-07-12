// стрелочная функция
let hello = (namee) => {
    return `Hello, ${namee}!`
}
console.log(hello('Bob'))

num = [4, 12, 7, 9, 20, 8, 0]
function f(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}
f(num)

function calc(num1, num2, operation) {
    switch (operation){
        case '+':
            return num1+num2
            break
        case '-':
            return num1-num2
            break
        case '*':
            return num1*num2
            break
        case '/':
            return num1/num2
            break
        case '%':
            return num1%num2
            break
        case '**':
            return num1**num2
            break
    }
}
console.log(calc(7, 3, '**'))