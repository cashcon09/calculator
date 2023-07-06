function add(a ,b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a ,b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(str){
    let nums = [];
    let operators = [];
    let total = [];
    let indexes = [0];
    for(let i = 0; i < str.length; i++){
        if(str[i] == '*' || str[i] == '+' || str[i] == '/' || str[i] == '-'){
            operators.push(str[i]);
            indexes.push(i);
        }
    }
    //let temp = str.replace('*', ' ')
    for(let i = 0; i < indexes.length; i++){
        if( str.substring(indexes[i], indexes[i+1]).includes('*') || str.substring(indexes[i], indexes[i+1]).includes('-') || str.substring(indexes[i], indexes[i+1]).includes('+') || str.substring(indexes[i], indexes[i+1]).includes('/') )
            nums.push(str.substring(indexes[i] + 1, indexes[i+1]));
        else nums.push(str.substring(indexes[i], indexes[i+1]));
        nums[i] = nums[i];
    }

    for(let i = 0; i <= (operators.length); i++){
        total.push(nums[i]);
        if(operators[i] != undefined)
            total.push(operators[i]);
    }
    let result =  operate2(Number(total[0]), Number(total[0+2]), total[0+1]);
    for(let i = 2; i < total.length - 1; i+=2){
        result = operate2(result, Number(total[i+2]), total[i+1]);
    }

    return result;
}

function operate2(num1, num2, operator){
    if(operator == '*')
        return multiply(num1, num2);
    if(operator == '+')
        return add(num1, num2);
    if(operator == '/')
        return divide(num1, num2);
    if(operator == '-')
        return subtract(num1, num2);
}

let numbers = document.querySelectorAll(".exp");
let num1 = '';
let text = document.querySelector("#p1");
for(number of numbers){
    number.addEventListener('click', function(e){
        num1 += String(e.target.id);
        text.textContent = num1;
        //console.log(num1);
    });
}

let equals = document.querySelector("#equals");
equals.addEventListener('click', function(e){
    console.log(num1);
    console.log(operate(num1));
    text.textContent = operate(num1);
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', function(e){
    num1 = '';
    text.textContent = '';
});

/*
let operators = document.querySelectorAll('.operator');
let operator1 = '';
let num2 = '';
for(operator of operators){
    operator.addEventListener('click', function(e){
        num1 = text.textContent;
        console.log(num1);
        operator1 = e.target.id;
        text.textContent = text.textContent + operator1;
        for(number of numbers){
            number.addEventListener('click', function(e){
                num2 += String(e.target.id);
                //text.textContent = num1;
                console.log(num2);
            });

        }
    });
}

*/


//console.log(operators);
//console.log(numbers);