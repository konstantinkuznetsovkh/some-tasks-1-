
// document.addEventListener("DOMContentLoaded", function () {
  $('#menu-tabs li').click(function () {
  var thisClass = this.className.slice(0, 2);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.t3').hide();
  $('div.t4').hide();
  $('div.t5').hide();
  $('div.t6').hide();
  $('div.t7').hide();
  $('div.' + thisClass).fadeIn(500);
  $('#menu-tabs li').removeClass('active');
  $(this).addClass('active');
  return false;
});
$('li.t1').click();
// });

//задача № 1
// jqCalculator
// Сделать калькулятор на jQuery,
//  который позволяет складывать, вычитать, умножать и делить числа.
//   Операции должны быть отдельными кнопками,
//   так же должно быть три поля ввода - для двух операндов и для результата.
function calcJs(){
const inputs = document.querySelectorAll("[type='number']");
const resultInput = document.querySelector(".result");
const calcBtn = document.querySelector(".calc");
const actionsContainer = document.querySelector(".actions");
const actionContainer = document.querySelector(".action");

let action;

// вешаем обработчик события на родительский элемент, который содержит кнопки.
//  И при помощи делегирования событий при клике, через дата атрибут получаем
// действие
actionsContainer.addEventListener("click", function(e) {
  action = e.target.getAttribute("data-action");
  actionContainer.innerHTML = action;
});

inputs.forEach(elem => {
  elem.addEventListener("input", function(e) {
    // при помощи регулярного выражения определяем
    // ввод +, - и заменяем на ''
    const regEx = /\+|\-/g;
    this.value = e.target.value.replace(regEx, "");
  });
});

// вешаем обработчик события на кнопку вычисления
calcBtn.addEventListener("click", function(e) {
  // если выбрано действие, тогда вызываем функцию calculate
  // и передаем действие, и значения из инпутов
  if (action) calculate(action, inputs[0].value, inputs[1].value);
});

function calculate(action, a, b) {
  let result;
  // при помощи конструкции switch проверяем действие и производим вычисление
  switch (action) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      // делаем проверку второго операнда на ноль,
      // если ноль возвращаем предупреждение
      //  если нет, показываем результат
      b == 0 ? (result = "Divizion by zero") : (result = +a / +b);
      break;
  }

  resultInput.value = result;
}
}
calcJs();





//задача № 2
// jqUpperCase
// Сделайте поле ввода (input type=text)
//  и кнопку upperCase,
//  при нажатии на которую все буквы в поле ввода превратятся в большие
function check(){
  document.getElementById("up").value = document.getElementById("up").value.toUpperCase();
}

function upperNow() {
  var a = document.getElementById("upNow").value;
  document.getElementById("upNow").value = a.toUpperCase();
}

// рабочая, всегда переключает
function upperNowSetTimeout(a){
  setTimeout(function(){
    a.value = a.value.toUpperCase();
  }, 777);
}

// такое решение работает но при снимания фокуса с поля ввода
$(function() {
  var input  = document.getElementById("focus");
  $(input).focusout(function() {
      // Uppercase-ize contents
      this.value = this.value.toLocaleUpperCase();
  });
});






//задача № 3
// jqRadioCalculator
// Сделайте калькулятор,
// только вместо набора кнопок для сложения,
// вычитания, умножения и деления используйте input type='radio'

function calculatorRadio() {
  var num1 = parseFloat( document.getElementById( 'num1' ).value );
  var num2 = parseFloat( document.getElementById( 'num2' ).value );

  if(document.getElementById('op1').checked) {
      res = num1 + num2;
  }
  if(document.getElementById('op2').checked) {
    res = num1 - num2;
   }
   if(document.getElementById('op3').checked) {
    res = num1 * num2;
   }
   if(document.getElementById('op4').checked) {
    res = num1 / num2;
   }
    document.getElementById('res').innerHTML = res;
}




//задача № 4
// Есть объект salaries с зарплатами.
// Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//     //... 650
function task4() {
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;
for (var name in salaries) {
  sum += salaries[name];
}

alert( sum );
}



//задача № 5
// Есть объект salaries с зарплатами.
// Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//     // ... "Петя"
function task5() {

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );
}



//задача № 6
// 1) Спросить у пользователя натуральное число(n).
// 2) Написать рекурсивную функцию которая будет выводить все от 1 до n.
function task6(){
  function getNumLine(num)
  {
    if ( num == 0) {
    num = "тю";
   return num
 }
  if ( num == 1)
      return num
         else return getNumLine(num - 1) + " " + num;
  }
var user = +prompt("num", "");
alert( getNumLine(user) );
}




// cделано типа работает
//задача № 7
// Напишите функцию которая будет спрашивать у пользователя число(n)
//  и будет вычислять сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте два варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
//Решение с использованием цикла:
function task7(){
 function sumTo(n=0) {
  //  n = 0;
  var sum = 0;
  for ( var i = 1; i <= n; i++ ) {
    sum += i;
  }
  return sum;
}
var userAnswer = prompt( "Напишите любое число", "" );
alert( sumTo(userAnswer) );

//Решение через рекурсию:

 function sumTo(n) {
    if (n == 1) return 1;
  return n + sumTo(n - 1);
}

var userAnswer = prompt( "Напишите любое число(рекурсия)", "" );
alert( sumTo( userAnswer ) + "(рекурсия)" );
}
// task7();


// cделано
//задача № 8
// 1) Напишите функцию , которая последовательно выводит в консоль числа от
// 1 до 20,
// с интервалом между числами 100 мс. То есть, весь вывод должен занимать
// 2000 мс,
//  в течение которых каждые 100 мс в консоли появляется очередное число.
//  Функция должна использовать setInterval.

function task8() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);


// 2) Сделайте то же самое, но с использованием рекурсивного setTimeout
// вместо setInterval.
// 2 ------------------------- Вывод чисел каждые 100 мс, через setTimeout
function printNumbersRecursion(){
	var start = 0,
		finish = 20,
		time = 100;

	var pnInt = setTimeout(function recursionTimer(){
		if ( start === finish ){
			clearTimeout(pnInt);
		} else {
			start++;
			console.log(start);
			pnInt = setTimeout(recursionTimer, time);
		}

	}, time);

}

printNumbersRecursion();
}


//add dz5


function get_name_browser(){
    var ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome! \n' + ' Да, и эти браузеры мы поддерживаем';
    if (ua.search(/Firefox/) > 0) return 'Firefox! \n' + ' Да, и эти браузеры мы поддерживаем';
    if (ua.search(/Opera/) > 0) return 'Opera! \n' + ' Да, и эти браузеры мы поддерживаем';
    if (ua.search(/Safari/) > 0) return 'Safari! \n' + ' Да, и эти браузеры мы поддерживаем';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer! \n' + ' О, да у вас IE!';
    return 'Мы надеемся, что и в вашем браузере все ок!';
}

var browser = get_name_browser();
swal(browser);


//задача № 9
// сверстать макет Infinity
// Используя информацию изложенную в презентациях
// Обязательно применить SCSS,
//  Gulp и подключить плагины анимации с помощью jQuery,
//   и применить, где необходимо, возможности JS
// Верстка должна быть адаптивной под все разрешения, экраны, браузеры


//the end
